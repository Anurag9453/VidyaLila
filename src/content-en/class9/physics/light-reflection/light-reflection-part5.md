# Chapter: Light: Reflection (Part 5)

> **Class:** 9 | **Subject:** Physics
> **This file continues from [light-reflection-part4.md](light-reflection-part4.md)** (covering spherical mirrors, concave vs. convex, pole $P$, centre of curvature $C$, principal focus $F$, focal length $f = R/2$, and the four standard rays). For introductory concepts on light, see [light-reflection.md](light-reflection.md). For real vs. virtual images, see [light-reflection-part3.md](light-reflection-part3.md).
> **Topics covered in this file:**
> 5. Image Formation by Spherical Mirrors

---

# Topic 5: Image Formation by Spherical Mirrors

In the previous topic, we established the geometric framework of spherical mirrors: concave (curving inward, converging) and convex (bulging outward, diverging). We defined their essential reference landmarks—pole $P$, centre of curvature $C$, principal focus $F$, and the relation $f = R/2$—and learned how four standard principal rays reflect predictably.

Now comes the crucial question: **when an object is placed at various distances in front of a curved mirror, what kind of image is formed?**
In this topic, we master geometric ray tracing, determine the location, size, and nature of the image across all six object positions for a concave mirror and all positions for a convex mirror, and introduce the mathematical precision of the **mirror formula** ($rac{1}{v} + rac{1}{u} = rac{1}{f}$) and **linear magnification** ($m = -rac{v}{u}$).

---

## The Hall of Mirrors at the Science Museum

On a weekend field trip to the National Science Museum, Leo and his classmates visited the famous "Hall of Mirrors." Inside the gallery stood three large, floor-to-ceiling mirror panels.

Standing in front of the first mirror, Leo burst into laughter: his reflection was **hilariously tall and slender**, as if his body had been stretched like rubber into the ceiling.
Stepping in front of the second mirror, he appeared **squat, short, and compressed**, like a flattened comic cartoon.
Curious, Leo walked up to the third mirror. When standing inches from the glass, his face appeared **huge, upright, and magnified**. But as he took several steps backward across the room, his reflection suddenly **flipped completely upside down**—his sneakers were pointing toward the ceiling while his head hung suspended below!

Startled, Leo turned to his physics instructor, Ms. Vance. "Ms. Vance, are these mirrors broken? How can one mirror make me giant and stretched, another make me squat, and the third flip me entirely upside down when I walk backward?"

Ms. Vance laughed warmly. "They are not broken at all, Leo. These novelty mirrors are engineered from sections of cylinders and spheres. Some sections curve inward (concave) and others bulge outward (convex). In Topic 4, you learned how curved surfaces bend light. Today, you will discover the exact geometric rules that govern where and how images form. By the end of this lesson, you will be able to predict the exact size and orientation of every reflection in this hall!"

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Ray diagram** | A geometric construction using standard principal rays to locate and characterize an optical image | Tracing two rays from the top of an arrow to find its image point |
| **Object distance ($u$)** | The linear distance along the principal axis from the pole $P$ to the object | An object placed $30	ext{ cm}$ in front of the mirror ($u = -30	ext{ cm}$) |
| **Image distance ($v$)** | The linear distance along the principal axis from the pole $P$ to the image | A real image forming $15	ext{ cm}$ in front of the mirror ($v = -15	ext{ cm}$) |
| **Real image** | An image formed by the physical intersection of reflected rays; can be captured on a screen | The inverted image of a candle flame focused on a paper card |
| **Virtual image** | An image formed where reflected rays only appear to diverge from a common point; cannot be projected onto a screen | Your reflection seen behind a plane or convex mirror |
| **Erect image** | An image that has the same vertical orientation as the object (upright) | A magnified face seen in a dental shaving mirror |
| **Inverted image** | An image that is oriented upside down relative to the object | An image formed below the axis by crossing real rays |
| **Magnified / Diminished** | An image larger than the object / smaller than the object | Makeup mirror (magnified); car wing mirror (diminished) |
| **Linear magnification ($m$)** | The ratio of the height of the image ($h'$) to the height of the object ($h$): $m = h'/h$ | $m = -0.5$ denotes an inverted image half the object's height |

---

## Part A: Ray Diagrams and Image Construction

Recall the **four standard principal rays** from Topic 4:
1. A ray **parallel to the principal axis** reflects through focus $F$ (concave) or appears to diverge from $F$ (convex).
2. A ray **passing through focus $F$** (or directed toward $F$) reflects parallel to the principal axis.
3. A ray **passing through centre of curvature $C$** strikes normally and reflects directly back along its own path.
4. A ray **incident at pole $P$** reflects symmetrically across the principal axis ($ngle r = ngle i$).

### Image Construction Technique

To construct the image of a finite linear object standing perpendicular to the principal axis:
1. Model the object as an upright arrow $AB$ standing on the axis, with its base $B$ resting on the axis and its head $A$ pointing upward.
2. Select **any two of the four standard rays** originating from the tip $A$ of the object and trace their reflected paths.
3. **Locate the intersection:**
   - If the reflected rays **physically intersect** in front of the mirror, the intersection point $A'$ is the **real image** of tip $A$.
   - If the reflected rays diverge away from each other, extend them straight backward behind the mirror with **dotted lines**. Their virtual intersection point $A'$ is the **virtual image** of tip $A$.
4. Drop a perpendicular line from $A'$ to meet the principal axis at $B'$. The segment $A'B'$ represents the complete optical image.

**Conventions in Ray Diagrams:**
- Real light rays and physical mirror boundaries are drawn as **solid lines**.
- Virtual ray extensions behind the mirror and virtual images are drawn as **dashed or dotted lines**.
- In the figures below, the mirror is centered at pole $P$, with focus $F = 10	ext{ cm}$ and centre of curvature $C = 20	ext{ cm}$ along the axis.

---

## Part B: The Six Object Positions for a Concave Mirror

As an object moves continuously from infinity toward the surface of a concave mirror, its image undergoes dramatic transformations across six distinct zones:

### Position 1: Object at Infinity ($u = \infty$)

Light rays arriving from an object at infinity (such as the Sun or a distant star) are effectively parallel to the principal axis.
By definition, all paraxial parallel rays reflect inward and converge at the principal focus $F$.

```
                                   )
                                   )
 -------->-------------------------)
                                </ )
 ------------------------------*---)----------- Principal axis
                                <\ )
 -------->-------------------------)
                                   )
                                   )
                           C   F   P
                               I
```

> **Figure 5.1** – Object at infinity. Incident parallel rays converge at focus $F$. The image is located at $F$, highly diminished (point-sized), real, and inverted.

- **Location:** At the principal focus $F$.
- **Size:** Extremely diminished, point-sized.
- **Nature:** Real and inverted.

### Position 2: Object Beyond the Centre of Curvature ($u > 2f$)

The object is positioned beyond $C$ (for example, at $u = 30	ext{ cm}$ when $f = 10	ext{ cm}$ and $C = 20	ext{ cm}$).
We trace Ray 1 (parallel to axis, reflecting through $F$) and Ray 2 (through $F$, reflecting parallel to axis).

```
                                   )
                                   )
                                   )
                       ↑----->-----)
                       │  ->--  </ )
 ----------------------------------)----------- Principal axis
                             ↓--<--)
                                   )
                                   )
                                   )
                                   )
                           C   F   P
                       O     I
```

> **Figure 5.2** – Object beyond $C$. Reflected rays intersect between $C$ and $F$. The image is real, inverted, and diminished.

- **Location:** Between focus $F$ and centre of curvature $C$.
- **Size:** Diminished (smaller than the object).
- **Nature:** Real and inverted.

### Position 3: Object at the Centre of Curvature ($u = 2f$)

The object is positioned directly at $C$ ($u = 20	ext{ cm}$).
Ray 1 (parallel to axis) reflects through $F$. Ray 2 (through $F$) emerges parallel to the axis. The reflected rays cross directly beneath $C$.

```
                                   )
                                   )
                           ↑--->---)
                           │ >\ // )
 ----------------------------------)----------- Principal axis
                           │/<   \)
                           ↓---<---)
                                   )
                                   )
                                   )
                           C   F   P
                           O,I
```

> **Figure 5.3** – Object at $C$. The image forms directly at $C$, inverted, real, and with exact equal size ($m = -1$).

- **Location:** Directly at the centre of curvature $C$.
- **Size:** Same size as the object ($h' = h$).
- **Nature:** Real and inverted.

### Position 4: Object Between the Centre of Curvature and Focus ($f < u < 2f$)

The object stands between $C$ and $F$ (for example, at $u = 15	ext{ cm}$).
Ray 1 reflects through $F$; Ray 2 through $F$ reflects parallel to the axis. They cross far beyond $C$.

```
                                   )
                                   )
                                   )
                             ↑-->--)
                             │\ // )
 ----------------------------------)----------- Principal axis
                       │    //  \  )
                       │  /<     \ )
                       │//        \)
                       ↓-----<-----)
                                   )
                           C   F   P
                       I     O
```

> **Figure 5.4** – Object between $C$ and $F$. The reflected rays intersect beyond $C$. The image is real, inverted, and magnified.

- **Location:** Beyond $C$.
- **Size:** Magnified (enlarged).
- **Nature:** Real and inverted.

> [!NOTE]
> Positions 2 and 4 are optical conjugates! By the Principle of Reversibility of Light, when the object is beyond $C$, the image is between $C$ and $F$. When the object is between $C$ and $F$, the image forms beyond $C$.

### Position 5: Object at the Principal Focus ($u = f$)

The object stands directly at focus $F$ ($u = 10	ext{ cm}$).
Ray 1 reflects through $F$. Ray 4 strikes pole $P$ and reflects symmetrically across the axis. Both reflected rays emerge **strictly parallel to one another**.

```
                                   )
                                   )
                                   )
                                   )
                               ↑->-)
                               │//\)
 ----------------------------------)----------- Principal axis
                            //  // )
                          /<  //   )
                        //  /<     )
                       /  //       )
                        //         )
                       /           )
                           C   F   P
                               O
```

> **Figure 5.5** – Object at focus $F$. Reflected rays form a parallel beam that never intersects in front of the mirror. The image is formed at infinity, highly magnified, real, and inverted.

- **Location:** At infinity ($v = \infty$).
- **Size:** Infinitely large (highly magnified).
- **Nature:** Real and inverted.
*(This configuration is used in vehicle headlights, searchlights, and torches to project a parallel beam of light).*

### Position 6: Object Between Focus and Pole ($u < f$)

The object is brought very close to the mirror, inside the focal length (for example, at $u = 5	ext{ cm}$).
Ray 1 reflects through $F$. Ray 4 reflects symmetrically at $P$.
In front of the mirror, the reflected rays **diverge outward** and can never meet. Tracing them straight backward behind the mirror with dotted lines, they intersect at a virtual point behind the glass.

```
                                   )
                                   )
                                   )   ↑
                                   ) ..│
                                 ↑-) . │
                                /<\).  │
 ----------------------------------)----------- Principal axis
                            /<    /)
                           /     / )
                                <  )
                               /   )
                              /    )
                             /     )
                           C   F   P
                                 O     I
```

> **Figure 5.6** – Object between $F$ and $P$. Reflected rays diverge in front of the mirror; their backward extensions intersect behind the mirror. The image is virtual, erect, and magnified.

- **Location:** Behind the mirror.
- **Size:** Magnified (enlarged).
- **Nature:** Virtual and erect.
*(This unique case is utilized in shaving mirrors, makeup mirrors, and dental inspection mirrors).*

---

## Part C: Image Formation by a Convex Mirror

A convex mirror is a diverging mirror. Regardless of where an object is placed in front of a convex mirror, reflected rays **diverge outward into space**. Consequently, physical rays never intersect in front of the mirror: **a real image can NEVER be formed by a convex mirror for a real object.**

We consider two representative cases:

```
                                 \ (
                                  \(
                       ↑----->-----(
                       │ \\       (.
                       │    \>\    ( .
                       │       \\ ( .↑
 ----------------------------------(----------- Principal axis
                               /</ (
                             //    (
                                   (
                                   (
                                   P   F   C
                       O              I
```

> **Figure 5.7** – Ray diagram for a convex mirror. Ray 1 reflects away as if originating from virtual focus $F$. Ray 4 reflects symmetrically at $P$. The dotted backward extensions intersect between $P$ and $F$ behind the mirror, producing a virtual, erect, and diminished image.

| Object Position | Image Position | Size of Image | Nature of Image |
|---|---|---|---|
| **At infinity** | At virtual focus $F$ behind mirror | Highly diminished (point-sized) | Virtual and erect |
| **Anywhere between infinity and pole $P$** | Between pole $P$ and focus $F$ behind mirror | Diminished (smaller than object) | Virtual and erect |

As an object approaches the pole of a convex mirror, its virtual image moves from $F$ toward $P$, growing progressively larger, but **it remains perpetually smaller than the object itself**.

---

## Part D: Master Summary Tables

**Concave Mirror Image Characteristics:**


| Position of Object | Position of Image | Relative Size | Nature of Image |
|---|---|---|---|
| **1. At infinity** | At focus $F$ | Point-sized (highly diminished) | Real and inverted |
| **2. Beyond $C$** | Between $F$ and $C$ | Diminished | Real and inverted |
| **3. At $C$** | At $C$ | Same size as object ($m = -1$) | Real and inverted |
| **4. Between $C$ and $F$** | Beyond $C$ | Magnified | Real and inverted |
| **5. At focus $F$** | At infinity | Highly magnified | Real and inverted |
| **6. Between $F$ and $P$** | Behind the mirror | Magnified | Virtual and erect |

**Convex Mirror Image Characteristics:**


| Position of Object | Position of Image | Relative Size | Nature of Image |
|---|---|---|---|
| **1. At infinity** | At focus $F$ behind mirror | Point-sized | Virtual and erect |
| **2. Between infinity and $P$** | Between $P$ and $F$ behind mirror | Diminished | Virtual and erect |

> [!TIP]
> **The Golden Rule for Mirrors:**
> For a concave mirror, as long as the object remains **outside the focal length ($u > f$)**, the image is always **real and inverted**. The instant the object steps **inside the focal length ($u < f$)**, the image snaps **behind the mirror, becoming virtual, erect, and magnified**.
> A convex mirror, by contrast, forms **only virtual, erect, and diminished images** for all object distances.

---

## Back to the Hall of Mirrors: Resolving the Mystery

Now we can explain the optical physics behind Leo's three mirrors:

1. **The Tall and Slender Mirror:**
   This mirror is vertically curved inward (concave) along its vertical cross-section, while remaining flat (plane) horizontally. Leo was standing close to it, within its vertical focal length ($u < f$). Along the vertical axis, the concave curve magnified his height ($m_y > 1$), while along the horizontal axis, the flat profile kept his width unchanged ($m_x = 1$). The result was a dramatic elongation: **tall and slender**!

2. **The Squat and Compressed Mirror:**
   This mirror bulges outward vertically (convex), while remaining flat horizontally. A convex curve diminishes the vertical dimension ($m_y < 1$), while the horizontal plane maintains normal width ($m_x = 1$). Leo appeared squished down: **short and wide**!

3. **The Inverting Mirror:**
   This was an authentic concave spherical mirror.
   - When Leo stood right against the glass ($u < f$, Position 6), he saw an **erect, magnified virtual image** of his face.
   - When he stepped back across the room beyond the focal point and centre of curvature ($u > 2f$, Position 2), the reflected rays crossed in mid-air in front of the mirror, projecting a **real, inverted image** ($m < 0$). To his eyes, his head was at the bottom and feet at the top!
   - As he passed through the focal zone, his image expanded to infinity and blurred into a giant wash of light.

Leo laughed, "Physics completely explains the carnival! The mirrors weren't magic—they were just shifting my coordinates across $F$ and $C$!"

---

## Part E: Linear Magnification ($m$) (Class 10 Extension)

**Linear magnification ($m$)** is the ratio of the height of the image ($h'$) to the height of the object ($h$):

$$m = rac{	ext{Height of Image }(h')}{	ext{Height of Object }(h)}$$

Since both heights are measured in identical units (cm or m), $m$ is a **pure, dimensionless number**.

**Sign Convention for Magnification:**

Heights measured vertically **above the principal axis are positive (+)**; heights measured **below the axis are negative (−)**. Since objects stand upright above the axis, object height $h$ is universally **positive**.
- **For a real, inverted image:** $h'$ is negative $\implies \mathbf{m < 0}$ (**negative**).
- **For a virtual, erect image:** $h'$ is positive $\implies \mathbf{m > 0}$ (**positive**).

| Value of $|m|$ | Physical Interpretation |
|---|---|
| $|m| > 1$ (e.g., $+2.5$ or $-3$) | Image is **magnified (enlarged)** |
| $|m| = 1$ (e.g., $+1$ or $-1$) | Image is of **equal size** to the object |
| $|m| < 1$ (e.g., $+0.4$ or $-0.5$) | Image is **diminished** |

> [!CAUTION]
> The algebraic sign of $m$ indicates **orientation and nature**, never size! For instance, $m = -3$ does not mean the image is smaller than zero; it means the image is **three times larger than the object and inverted (real)**.

### Example 1: Calculating Magnification from Object and Image Heights
A concave mirror forms an inverted real image $3	ext{ cm}$ tall of a toy figurine that is $6	ext{ cm}$ tall. Calculate the magnification.

**Solution:**
$$h = +6	ext{ cm}, \quad h' = -3	ext{ cm}	ext{ (inverted)}$$
$$m = rac{h'}{h} = rac{-3	ext{ cm}}{+6	ext{ cm}} = \mathbf{-0.5}$$
The image is inverted (negative sign), real, and half the physical size of the object ($|m| = 0.5 < 1$).
*Verification:* $h' = m 	imes h = -0.5 	imes 6	ext{ cm} = -3	ext{ cm} \; \checkmark$

### Example 2: Determining Image Height from Magnification
An optical mirror produces a magnification $m = +1.5$ of an object $4	ext{ cm}$ tall. Determine the height and nature of the image.

**Solution:**
$$h' = m 	imes h = (+1.5) 	imes (+4	ext{ cm}) = \mathbf{+6	ext{ cm}}$$
Because $m > 0$, the image is **virtual, erect**, and enlarged by a factor of $1.5$.
*Verification:* $h'/h = 6/4 = 1.5 \; \checkmark$

---

## Part F: The Mirror Formula and Algebraic Ray Tracing (Class 10 Extension)

Ray diagrams provide qualitative insight into image formation. To compute the exact spatial coordinates of an image, physicists use the **Mirror Formula**:

$$rac{1}{v} + rac{1}{u} = rac{1}{f}$$

Together with the magnification equation:

$$m = rac{h'}{h} = -rac{v}{u}$$

### Simple Cartesian Sign Convention

- Object distance $u$ is **always negative** for real objects placed in front of the mirror ($u < 0$).
- Real image distance $v$ is **negative** (forms in front of mirror).
- Virtual image distance $v$ is **positive** (forms behind mirror).
- Focal length $f$ is **negative** for concave mirrors, and **positive** for convex mirrors.

### Mirror Formula and Magnification

The relationship connecting object distance $, image distance $, and focal length $ is given by the **Mirror Formula**:

11153rac{1}{v} + rac{1}{u} = rac{1}{f}11153

The linear magnification $ is expressed in terms of distances as:

11153m = rac{h'}{h} = -rac{v}{u}11153

### Verification of the Formula Against Part B Ray Tracing ($f = -10	ext{ cm}$):

| Object Distance $u$ | Calculation of $1/v = 1/f - 1/u$ | Image Distance $v$ | Magnification $m = -v/u$ | Physical Concordance |
|:---:|:---:|:---:|:---:|---|
| **$-30	ext{ cm}$** | $-rac{1}{10} + rac{1}{30} = -rac{2}{30} = -rac{1}{15}$ | **$-15	ext{ cm}$** | $-rac{-15}{-30} = \mathbf{-0.5}$ | Between $F$ and $C$, diminished, real, inverted (Position 2) |
| **$-20	ext{ cm}$** | $-rac{1}{10} + rac{1}{20} = -rac{1}{20}$ | **$-20	ext{ cm}$** | $-rac{-20}{-20} = \mathbf{-1.0}$ | At $C$, equal size, real, inverted (Position 3) |
| **$-15	ext{ cm}$** | $-rac{1}{10} + rac{1}{15} = -rac{1}{30}$ | **$-30	ext{ cm}$** | $-rac{-30}{-15} = \mathbf{-2.0}$ | Beyond $C$, magnified, real, inverted (Position 4) |
| **$-10	ext{ cm}$** | $-rac{1}{10} + rac{1}{10} = 0$ | **$\pm \infty$** | Undefined | At infinity, highly magnified, parallel rays (Position 5) |
| **$-5	ext{ cm}$** | $-rac{1}{10} + rac{1}{5} = +rac{1}{10}$ | **$+10	ext{ cm}$** | $-rac{+10}{-5} = \mathbf{+2.0}$ | Behind mirror, magnified, virtual, erect (Position 6) |

The mathematical mirror formula matches our graphical ray diagrams with flawless precision!

### Example 3: Concave Mirror with Object Beyond $C$
An object $6	ext{ cm}$ tall is placed $30	ext{ cm}$ in front of a concave mirror of focal length $10	ext{ cm}$. Find the image location, magnification, and image height.

**Solution:**
$$f = -10	ext{ cm}, \quad u = -30	ext{ cm}, \quad h = +6	ext{ cm}$$
$$rac{1}{v} = rac{1}{f} - rac{1}{u} = rac{1}{-10} - rac{1}{-30} = -rac{1}{10} + rac{1}{30} = -rac{2}{30} = -rac{1}{15}	ext{ cm}^{-1}$$
$$v = \mathbf{-15	ext{ cm}}$$
Because $v < 0$, the image forms $15	ext{ cm}$ in front of the mirror (real image).
$$m = -rac{v}{u} = -rac{-15}{-30} = \mathbf{-0.5}$$
$$h' = m 	imes h = (-0.5) 	imes (+6	ext{ cm}) = \mathbf{-3	ext{ cm}}$$
The image is real, inverted, diminished, and located between $F$ and $C$.
*Verification:* $rac{1}{-15} + rac{1}{-30} = -rac{3}{30} = -rac{1}{10} = rac{1}{f} \; \checkmark$

### Example 4: Concave Mirror with Object Inside the Focus
An object is placed $5	ext{ cm}$ in front of a concave mirror of focal length $10	ext{ cm}$. Determine the image position and nature.

**Solution:**
$$f = -10	ext{ cm}, \quad u = -5	ext{ cm}$$
$$rac{1}{v} = rac{1}{-10} - rac{1}{-5} = -rac{1}{10} + rac{2}{10} = +rac{1}{10}	ext{ cm}^{-1} \implies v = \mathbf{+10	ext{ cm}}$$
$$m = -rac{v}{u} = -rac{+10}{-5} = \mathbf{+2.0}$$
Because $v > 0$, the image is **virtual, erect**, magnified by a factor of 2, and located $10	ext{ cm}$ behind the mirror.
*Verification:* $rac{1}{10} + rac{1}{-5} = rac{1}{10} - rac{2}{10} = -rac{1}{10} = rac{1}{f} \; \checkmark$

### Example 5: Convex Mirror Calculation
An object $5	ext{ cm}$ tall is placed $15	ext{ cm}$ in front of a convex mirror of focal length $10	ext{ cm}$. Find the image position, magnification, and size.

**Solution:**
$$f = +10	ext{ cm}, \quad u = -15	ext{ cm}, \quad h = +5	ext{ cm}$$
$$rac{1}{v} = rac{1}{+10} - rac{1}{-15} = rac{1}{10} + rac{1}{15} = rac{3 + 2}{30} = rac{5}{30} = rac{1}{6}	ext{ cm}^{-1} \implies v = \mathbf{+6	ext{ cm}}$$
$$m = -rac{v}{u} = -rac{+6}{-15} = \mathbf{+0.4}$$
$$h' = m 	imes h = 0.4 	imes 5	ext{ cm} = \mathbf{+2.0	ext{ cm}}$$
The image is formed $6	ext{ cm}$ behind the mirror (between $P$ and $F$). It is virtual, erect, and diminished to $2	ext{ cm}$.
*Verification:* $rac{1}{6} + rac{1}{-15} = rac{5 - 2}{30} = rac{3}{30} = rac{1}{10} = rac{1}{f} \; \checkmark$

### Example 6: Finding Equal-Sized Real Image from Radius of Curvature
A concave mirror has a radius of curvature $R = 40	ext{ cm}$. Where must an object be placed to form an inverted image of the exact same size?

**Solution:**
Equal size and inverted means $m = -1$.
$$m = -rac{v}{u} = -1 \implies v = u$$
$$rac{1}{u} + rac{1}{u} = rac{1}{f} \implies rac{2}{u} = rac{1}{f} \implies u = 2f = R$$
$$f = rac{-40	ext{ cm}}{2} = -20	ext{ cm} \implies u = 2 	imes (-20	ext{ cm}) = \mathbf{-40	ext{ cm}}$$
The object must be placed at $C$, exactly $40	ext{ cm}$ in front of the mirror.
*Verification:* $v = u = -40	ext{ cm} \implies rac{1}{-40} + rac{1}{-40} = -rac{1}{20} = rac{1}{f} \; \checkmark$

### Example 7: Determining Object Distance Given Image Location
A concave mirror with $f = 20	ext{ cm}$ forms a real image on a screen located $30	ext{ cm}$ in front of the mirror. Find the object distance and magnification.

**Solution:**
$$f = -20	ext{ cm}, \quad v = -30	ext{ cm}	ext{ (real image)}$$
$$rac{1}{u} = rac{1}{f} - rac{1}{v} = rac{1}{-20} - rac{1}{-30} = -rac{3}{60} + rac{2}{60} = -rac{1}{60}	ext{ cm}^{-1} \implies u = \mathbf{-60	ext{ cm}}$$
$$m = -rac{v}{u} = -rac{-30}{-60} = \mathbf{-0.5}$$
The object stands $60	ext{ cm}$ in front of the mirror (beyond $C = 40	ext{ cm}$).
*Verification:* $rac{1}{-30} + rac{1}{-60} = -rac{3}{60} = -rac{1}{20} = rac{1}{f} \; \checkmark$

### Example 8: Determining Focal Length from Optical Bench Data
In a laboratory experiment, a student places an illuminated candle $30	ext{ cm}$ in front of a concave mirror and obtains a sharp real image on a screen positioned $60	ext{ cm}$ from the mirror. Determine the focal length and radius of curvature.

**Solution:**
$$u = -30	ext{ cm}, \quad v = -60	ext{ cm}$$
$$rac{1}{f} = rac{1}{v} + rac{1}{u} = rac{1}{-60} + rac{1}{-30} = -rac{1}{60} - rac{2}{60} = -rac{3}{60} = -rac{1}{20}	ext{ cm}^{-1}$$
$$f = \mathbf{-20	ext{ cm}}, \quad R = 2f = \mathbf{-40	ext{ cm}}$$
The mirror is concave with a focal length of $20	ext{ cm}$ and radius of $40	ext{ cm}$.
*Verification:* $m = -(-60)/(-30) = -2$ (magnified real image, Position 4) $\checkmark$

### Example 9: Equal-Sized Real Image Condition
A concave mirror has a focal length of $15	ext{ cm}$. At what distance should an object be placed so that its real image is formed with equal size?

**Solution:**
For equal-sized real image, $m = -1 \implies v = u$.
$$u = 2f = 2 	imes (-15	ext{ cm}) = \mathbf{-30	ext{ cm}}$$
The object must be placed at $C$, exactly $30	ext{ cm}$ in front of the mirror. $\checkmark$

### Example 10: Shaving Mirror Optics
A concave shaving mirror has a focal length of $25	ext{ cm}$. A person holds the mirror $10	ext{ cm}$ from their face. Calculate the image distance and magnification.

**Solution:**
$$f = -25	ext{ cm}, \quad u = -10	ext{ cm}$$
$$rac{1}{v} = rac{1}{-25} - rac{1}{-10} = -rac{2}{50} + rac{5}{50} = +rac{3}{50}	ext{ cm}^{-1} \implies v = +rac{50}{3}	ext{ cm} pprox \mathbf{+16.67	ext{ cm}}$$
$$m = -rac{v}{u} = -rac{+50/3}{-10} = \mathbf{+1.67}$$
The image forms $16.67	ext{ cm}$ behind the mirror. It is virtual, erect, and magnified by a factor of $1.67$.
*Verification:* $rac{1}{16.67} + rac{1}{-10} = 0.06 - 0.10 = -0.04 = rac{1}{-25} \; \checkmark$

### Example 11: Automotive Convex Rearview Mirror
The convex side mirror of an automobile has a focal length of $+1.0	ext{ m}$. A truck $3.0	ext{ m}$ tall is traveling $5.0	ext{ m}$ behind the mirror. Determine the position and height of the truck's image.

**Solution:**
$$f = +1.0	ext{ m}, \quad u = -5.0	ext{ m}, \quad h = +3.0	ext{ m}$$
$$rac{1}{v} = rac{1}{+1.0} - rac{1}{-5.0} = 1.0 + 0.2 = 1.2	ext{ m}^{-1} = rac{6}{5}	ext{ m}^{-1} \implies v = rac{5}{6}	ext{ m} pprox \mathbf{+0.833	ext{ m}}$$
$$m = -rac{v}{u} = -rac{+5/6}{-5} = +rac{1}{6} pprox \mathbf{+0.167}$$
$$h' = m 	imes h = rac{1}{6} 	imes 3.0	ext{ m} = \mathbf{+0.50	ext{ m}}	ext{ (50 cm)}$$
The virtual erect image forms $0.833	ext{ m}$ behind the mirror, diminished to $50	ext{ cm}$ in height.
*Verification:* $v < f$ ($0.833	ext{ m} < 1.0	ext{ m}$), falling between $P$ and $F$ as required. $\checkmark$

### Example 12: Identifying Image Nature Across Object Distances
For a concave mirror of focal length $f = 10	ext{ cm}$ ($C = 20	ext{ cm}$), determine the image position and nature for each object distance:

| Object Distance from $P$ | Object Position Domain | Expected Image Characteristics |
|---|---|---|
| The Sun (very distant) | Infinity ($u 	o \infty$) | At focus $F$, point-sized, real, inverted |
| $50	ext{ cm}$ | Beyond $C$ ($u > 20	ext{ cm}$) | Between $F$ and $C$, diminished, real, inverted |
| $20	ext{ cm}$ | At $C$ ($u = 20	ext{ cm}$) | At $C$, equal size ($m = -1$), real, inverted |
| $14	ext{ cm}$ | Between $C$ and $F$ ($10	ext{ cm} < u < 20	ext{ cm}$) | Beyond $C$, magnified, real, inverted |
| $10	ext{ cm}$ | At focus $F$ ($u = 10	ext{ cm}$) | At infinity, highly magnified, parallel rays |
| $6	ext{ cm}$ | Between $F$ and $P$ ($u < 10	ext{ cm}$) | Behind mirror, magnified, virtual, erect |

*Numerical check for $u = -14	ext{ cm}$:*
$rac{1}{v} = -rac{1}{10} + rac{1}{14} = -rac{2}{70} \implies v = -35	ext{ cm}$ (beyond $C$).
$m = -(-35)/(-14) = -2.5$ (magnified, real, inverted). $\checkmark$

---

## Common Pitfalls to Avoid

1. **Mistake 1: Choosing arbitrary rays for ray diagrams.** ❌ Only trace the four standard principal rays whose geometric paths are physically certain. An arbitrary ray has an unknown angle of reflection unless computed with a protractor.
2. **Mistake 2: Drawing real rays as dashed lines and virtual rays as solid lines.** ❌ Real physical light rays that strike screens are strictly solid. Virtual backward extensions behind the mirror are strictly dashed.
3. **Mistake 3: Omitting Cartesian negative signs in the mirror formula.** ❌ For a real object, $u$ is **always negative**. A concave mirror's focal length is **always negative**. Entering $u = +30$ and $f = -10$ results in completely erroneous image positions.
4. **Mistake 4: Confusing radius of curvature with focal length.** ❌ $f = R/2$. A mirror with $R = 40	ext{ cm}$ has $f = -20	ext{ cm}$, not $-40	ext{ cm}$.
5. **Mistake 5: Believing a convex mirror can produce a real image.** ❌ For real objects, a convex mirror **always** forms virtual, erect, and diminished images.
6. **Mistake 6: Misinterpreting negative magnification as a fractional size.** ❌ A magnification of $m = -2$ does not mean the image is smaller than zero; it means the image is **two times larger than the object and inverted**.

---

## Quick Recap

- Ray diagrams use **any two of four standard rays** from the object tip: parallel $	o F$, through $F 	o$ parallel, through $C 	o$ retrace, at $P 	o$ symmetrical.
- **Concave Mirror Summary:**
  - $u = \infty \implies$ at $F$, point-sized, real, inverted.
  - $u > 2f \implies$ between $F$ and $C$, diminished, real, inverted.
  - $u = 2f \implies$ at $C$, same size, real, inverted ($m = -1$).
  - $f < u < 2f \implies$ beyond $C$, magnified, real, inverted.
  - $u = f \implies$ at infinity, highly magnified, real, inverted.
  - $u < f \implies$ behind mirror, magnified, virtual, erect ($m > +1$).
- **Convex Mirror Summary:** For all real object positions, image is **behind mirror between $P$ and $F$, diminished, virtual, and erect** ($0 < m < +1$).
- **Linear Magnification:** $m = h'/h = -v/u$. Positive $m \implies$ erect/virtual; negative $m \implies$ inverted/real.
- **Mirror Formula:** $rac{1}{v} + rac{1}{u} = rac{1}{f}$. Always substitute $u, v, f$ with proper Cartesian signs.

---

## Practice Questions

1. A concave mirror has a focal length of $15	ext{ cm}$. Describe the position, nature, and relative size of the image formed when an object is placed:
   - (a) $45	ext{ cm}$ from the mirror.
   - (b) $20	ext{ cm}$ from the mirror.
   - (c) $8	ext{ cm}$ from the mirror.
2. An object $5.0	ext{ cm}$ tall is placed $45	ext{ cm}$ in front of a concave mirror of focal length $15	ext{ cm}$. Calculate the image distance, magnification, and image height.
3. An object $6.0	ext{ cm}$ tall is placed $30	ext{ cm}$ in front of a convex mirror of focal length $15	ext{ cm}$. Find the image location, magnification, and height of the image.
4. A dental concave mirror has a radius of curvature of $30	ext{ cm}$. A tooth $2.0	ext{ mm}$ wide is inspected at a distance of $10	ext{ cm}$ from the mirror. Calculate the position and width of the tooth's image.
5. A concave mirror forms a real image that is three times larger than the object on a projection screen placed $60	ext{ cm}$ in front of the mirror. Find the object distance and the focal length of the mirror.
6. State whether each statement is True or False, providing a one-sentence scientific justification:
   - (a) A convex mirror can project a real inverted image onto a card.
   - (b) A real image can be captured directly onto a photographic screen.
   - (c) A magnification of $m = -2$ indicates that the image is smaller than the object.
   - (d) Placing an object at the centre of curvature of a concave mirror forms an image of identical size.
7. An object is placed $24	ext{ cm}$ in front of a concave mirror, forming a real image $40	ext{ cm}$ in front of the mirror. Determine the focal length and radius of curvature of the mirror.
8. A small luminous bug is placed $4.0	ext{ cm}$ in front of a concave mirror of focal length $12	ext{ cm}$. Determine the image distance and magnification. Is the image real or virtual?
9. A convex mirror has a focal length of $+20	ext{ cm}$. Calculate the image distance and magnification when an object is placed:
   - (a) $100	ext{ cm}$ from the mirror.
   - (b) $10	ext{ cm}$ from the mirror.
   Describe what happens to the size and position of the image as the object moves closer to the mirror.
10. An optical mirror forms an erect image of an object that is half the object's height when the object is placed $20	ext{ cm}$ from the mirror. Identify the type of mirror and calculate its focal length.

### Answers

1. (a) At $u = 45	ext{ cm} > 2f = 30	ext{ cm}$ (beyond $C$): Image is formed **between $F$ and $C$ ($15	ext{ cm} < v < 30	ext{ cm}$), diminished, real, and inverted**.
   (b) At $u = 20	ext{ cm}$ (between $F$ and $C$): Image is formed **beyond $C$ ($v > 30	ext{ cm}$), magnified, real, and inverted**.
   (c) At $u = 8	ext{ cm} < f = 15	ext{ cm}$ (inside $F$): Image is formed **behind the mirror, magnified, virtual, and erect**.

2. $f = -15	ext{ cm}, \quad u = -45	ext{ cm}, \quad h = +5.0	ext{ cm}$.
   $rac{1}{v} = rac{1}{-15} - rac{1}{-45} = -rac{3}{45} + rac{1}{45} = -rac{2}{45} \implies v = \mathbf{-22.5	ext{ cm}}$.
   $m = -rac{-22.5}{-45} = \mathbf{-0.5}$.
   $h' = m 	imes h = -0.5 	imes 5.0	ext{ cm} = \mathbf{-2.5	ext{ cm}}$.
   Image is real, inverted, diminished, located $22.5	ext{ cm}$ in front of the mirror.
   *Verification:* $rac{1}{-22.5} + rac{1}{-45} = -rac{2}{45} - rac{1}{45} = -rac{3}{45} = -rac{1}{15} = rac{1}{f} \; \checkmark$

3. $f = +15	ext{ cm}, \quad u = -30	ext{ cm}, \quad h = +6.0	ext{ cm}$.
   $rac{1}{v} = rac{1}{+15} - rac{1}{-30} = rac{2}{30} + rac{1}{30} = rac{3}{30} = rac{1}{10} \implies v = \mathbf{+10	ext{ cm}}$.
   $m = -rac{+10}{-30} = \mathbf{+rac{1}{3} pprox +0.333}$.
   $h' = rac{1}{3} 	imes 6.0	ext{ cm} = \mathbf{+2.0	ext{ cm}}$.
   Image is virtual, erect, diminished, located $10	ext{ cm}$ behind the mirror.
   *Verification:* $rac{1}{10} + rac{1}{-30} = rac{3 - 1}{30} = rac{2}{30} = rac{1}{15} = rac{1}{f} \; \checkmark$

4. $R = 30	ext{ cm} \implies f = -15	ext{ cm}$. $u = -10	ext{ cm}, \quad h = 2.0	ext{ mm}$.
   $rac{1}{v} = rac{1}{-15} - rac{1}{-10} = -rac{2}{30} + rac{3}{30} = +rac{1}{30} \implies v = \mathbf{+30	ext{ cm}}$.
   $m = -rac{+30}{-10} = \mathbf{+3.0}$.
   $h' = 3.0 	imes 2.0	ext{ mm} = \mathbf{6.0	ext{ mm}}$.
   Image forms $30	ext{ cm}$ behind the mirror; it is virtual, erect, and magnified to $6.0	ext{ mm}$.
   *Verification:* $rac{1}{30} + rac{1}{-10} = rac{1 - 3}{30} = -rac{2}{30} = -rac{1}{15} = rac{1}{f} \; \checkmark$

5. Real image on screen $\implies v = -60	ext{ cm}$. Magnified real image is inverted $\implies m = -3$.
   $m = -rac{v}{u} \implies -3 = -rac{-60}{u} \implies u = rac{60}{-3} = \mathbf{-20	ext{ cm}}$.
   $rac{1}{f} = rac{1}{-60} + rac{1}{-20} = -rac{1}{60} - rac{3}{60} = -rac{4}{60} = -rac{1}{15} \implies f = \mathbf{-15	ext{ cm}}$.
   The object is at $20	ext{ cm}$ in front of the mirror (between $F=15$ and $C=30$).
   *Verification:* $m = -(-60)/(-20) = -3 \; \checkmark$

6. (a) **False** ❌. A convex mirror diverges rays; its reflected rays never physically intersect to form a real image on a screen.
   (b) **True** ✅. Real images form by the physical convergence of light rays, so they can be captured on physical screens.
   (c) **False** ❌. A magnification of $m = -2$ means the image is inverted and twice the height of the object.
   (d) **True** ✅. When $u = 2f = C$, $v = 2f$ and $m = -1$, producing an image of identical dimensions.

7. $u = -24	ext{ cm}, \quad v = -40	ext{ cm}$.
   $rac{1}{f} = rac{1}{-40} + rac{1}{-24} = -rac{3}{120} - rac{5}{120} = -rac{8}{120} = -rac{1}{15} \implies f = \mathbf{-15	ext{ cm}}$.
   $R = 2f = 2 	imes (-15	ext{ cm}) = \mathbf{-30	ext{ cm}}$.
   The radius of curvature is $30	ext{ cm}$.
   *Verification:* $rac{1}{-40} + rac{1}{-24} = -0.025 - 0.04167 = -0.06667 = -rac{1}{15} \; \checkmark$

8. $f = -12	ext{ cm}, \quad u = -4.0	ext{ cm}$.
   $rac{1}{v} = rac{1}{-12} - rac{1}{-4.0} = -rac{1}{12} + rac{3}{12} = +rac{2}{12} = +rac{1}{6} \implies v = \mathbf{+6.0	ext{ cm}}$.
   $m = -rac{+6.0}{-4.0} = \mathbf{+1.5}$.
   The image forms $6.0	ext{ cm}$ behind the mirror; it is **virtual, erect, and magnified**.
   *Verification:* $rac{1}{6} + rac{1}{-4} = rac{2 - 3}{12} = -rac{1}{12} = rac{1}{f} \; \checkmark$

9. $f = +20	ext{ cm}$.
   (a) At $u = -100	ext{ cm}$:
   $rac{1}{v} = rac{1}{20} - rac{1}{-100} = rac{5 + 1}{100} = rac{6}{100} \implies v = +rac{100}{6} pprox \mathbf{+16.67	ext{ cm}}$.
   $m = -rac{+16.67}{-100} = \mathbf{+0.167}	ext{ (1/6)}$.
   (b) At $u = -10	ext{ cm}$:
   $rac{1}{v} = rac{1}{20} - rac{1}{-10} = rac{1 + 2}{20} = rac{3}{20} \implies v = +rac{20}{3} pprox \mathbf{+6.67	ext{ cm}}$.
   $m = -rac{+6.67}{-10} = \mathbf{+0.667}	ext{ (2/3)}$.
   *Observation:* As the object approaches the mirror, the virtual image moves from near $F$ toward pole $P$ and grows larger ($0.167 	o 0.667$), but always remains diminished ($m < 1$).

10. Erect image means virtual $\implies m = +0.5$. $u = -20	ext{ cm}$.
    $m = -rac{v}{u} \implies +0.5 = -rac{v}{-20} \implies v = \mathbf{+10	ext{ cm}}$.
    $rac{1}{f} = rac{1}{+10} + rac{1}{-20} = rac{2 - 1}{20} = +rac{1}{20} \implies f = \mathbf{+20	ext{ cm}}$.
    Because $f > 0$ and the erect image is diminished ($m = 0.5 < 1$), the mirror is strictly **convex** (a concave mirror cannot form a diminished erect image of a real object).
    *Verification:* $m = -(+10)/(-20) = +0.5$ and $rac{1}{10} - rac{1}{20} = rac{1}{20} = rac{1}{f} \; \checkmark$
