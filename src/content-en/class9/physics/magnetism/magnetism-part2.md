# Chapter: Magnetism (Part 2)

> **Class:** 9 | **Subject:** Physics
> **This file continues from [magnetism.md](magnetism.md)** (which established magnets, their conjugate N–S poles, the directive property, and the fundamental law of attraction and repulsion).
> **Topics covered in this file:**
> 2. Magnetic Field and Field Lines

---

# Topic 2: Magnetic Field and Field Lines

In the preceding topic, we observed that a magnet exerts forces across distance without requiring direct physical contact. A bar magnet manipulated beneath a sheet of cardboard smoothly steers a steel paper clip resting on top. But how far does this invisible influence extend into space? Does it spread out uniformly in all directions, or does it follow a distinct geometric pattern? Can we visualize this invisible sphere of influence, or construct a precise mathematical map of it?

In this topic, we formally define the region surrounding a magnet as its **magnetic field**. We learn how to map this field using **magnetic field lines**, analyze the field patterns of different magnet configurations, and discover how this mapping unlocks the operation of the **navigational compass** and reveals the profound nature of the **Earth as a planetary magnet**.

---

## A Compass on the Ship's Deck

On a calm, starlit evening, an oceanic research vessel was steaming across the open waters of the North Atlantic. On the navigation bridge, veteran navigator **Captain Harris** sat near the helm console, accompanied by cadet **Leo**, who was on his first open-ocean training voyage.

Directly in front of the ship's wheel rested the binnacle, a brass housing containing a marine magnetic compass. Suspended horizontally on a low-friction jewel pivot was a slender magnetic needle. Suddenly, the helmsman adjusted the rudder to execute a planned course alteration. As the vessel turned smoothly toward the starboard (right), the deck, the bridge windows, the helm console, and the brass compass bowl all rotated along with the hull. Yet, Leo noticed with astonishment that **the compass needle remained perfectly steady, locked steadfastly onto the exact same northward orientation.**

Leo leaned forward in fascination. "Captain Harris, what is gripping that needle? No matter which way the ship swings, the needle refuses to turn with the deck. There is no string or mechanical lever attached to it!"

Captain Harris smiled knowingly. "There is no physical thread, Leo, but there is an invisible physical grip: a planetary **magnetic force field**."

Leo then glanced at a heavy, carbon steel maintenance toolbox resting against the console bulkhead, just a meter away. "Captain, what if I were to lift that heavy steel toolbox and set it right next to the compass bowl? Would the needle still hold its true heading?"

"A brilliant question, Leo," Captain Harris replied. "Before you test that, you must understand how a magnet's influence permeates space, and how magnetic materials distort that space. Once you comprehend magnetic fields and field lines, both of your questions will be completely answered." We will return to resolve Captain Harris and Leo's discussion in Part D.

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Magnetic field** | The region or space surrounding a magnet within which its magnetic force is exerted and detected | The space around a bar magnet where iron pins are pulled toward it |
| **Magnetic field line (line of force)** | An imaginary continuous curve drawn in a magnetic field such that the tangent at any point gives the direction of the field | The curved loops mapped with iron filings or a plotting compass |
| **Iron filings** | Extremely fine, needle-like particles of soft iron that act as microscopic magnetic dipoles in a field | Sprinkled iron powder aligning along field patterns |
| **Tangent** | A straight line that touches a curve at exactly one point without intersecting it at that point | A ruler laid flat against a circular hoop at a single point |
| **Magnetic compass** | An instrument containing a delicately pivoted magnetic needle that rotates horizontally to indicate directional heading | A marine binnacle compass, a hiking pocket compass |
| **Geographic north pole** | The northern endpoint of the Earth's rotational axis of spin ($90^\circ\text{ N}$ latitude) | The true North Pole located on Arctic sea ice |
| **Magnetic poles of the Earth** | The two conjugate magnetic poles of the Earth's planetary dipole field, situated near but distinct from geographic poles | The magnetic pole in northern Canada toward which compass needles point |
| **Magnetic declination** | The horizontal angle between geographic north (true north) and magnetic north at a particular location | A compass declination of $3^\circ\text{ East}$ in a navigation chart |
| **Magnetic dip (inclination)** | The angle that the total geomagnetic field vector makes with the local horizontal plane | A dipping needle pointing vertically downward at the magnetic pole |
| **Magnetic shielding** | The practice of enclosing a space or device inside a high-permeability soft iron shield to isolate it from external magnetic fields | A soft iron cylindrical casing protecting a delicate marine chronometer |

---

## Part A: What is a Magnetic Field?

### The Region of Magnetic Influence

When an iron nail is brought near a bar magnet, it experiences a noticeable attractive pull. If the nail is moved farther away, the pull weakens. If it is moved to a distance of several meters, no measurable force acts on it whatsoever. This simple observation reveals that a magnet's influence is confined to a specific volume of space surrounding it.

> **Magnetic field:** The space or region surrounding a magnet within which its magnetic force can be experienced and detected by a magnetic material or another magnet.

A physical "field" in physics is a spatial distribution of a physical property. Just as the Earth's gravitational field occupies the space around the planet and pulls on masses, a magnetic field occupies the space surrounding a magnet and exerts forces on moving electric charges, magnetic dipoles, and ferromagnetic bodies.

### Where is the Field Strong and Where is it Weak?

In Topic 1, we discovered that iron filings and steel pins adhere in greatest density near the **poles** of a magnet, while the center holds virtually none. This spatial variation reflects the intensity of the magnetic field:
- The magnetic field is **strongest near the magnetic poles**.
- The magnetic field **weakens continuously as distance from the magnet increases**.

### Visualising the Field with Iron Filings

Although a magnetic field is invisible to the naked eye, its geometric structure can be visualized with precision using iron filings.

**Experiment 1.** Place a uniform bar magnet horizontally on a flat wooden bench. Lay a sheet of stiff white paper or transparent acrylic directly over the magnet. Sprinkle fine iron filings lightly and uniformly across the surface, then tap the sheet gently with a pencil.

The light tapping overcomes mechanical friction between the filings and paper. Under the influence of the local magnetic forces, each microscopic particle of iron becomes temporarily magnetised by induction, behaving as a miniature compass needle. The particles pivot and chain together end-to-end, tracing out a magnificent geometric pattern: **smooth, continuous curved lines arcing from one pole to the other**.

```
   Iron filings on paper over a bar magnet (viewed from above):

            ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
         ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
      ~ ~ ~                         ~ ~ ~
    ~ ~ ~  ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~  ~ ~ ~
   ~ ~  ~ ~                           ~ ~  ~ ~
  ~ ~  ~ ~    [N═════════════════S]    ~ ~  ~ ~
   ~ ~  ~ ~                           ~ ~  ~ ~
    ~ ~ ~  ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~  ~ ~ ~
      ~ ~ ~                         ~ ~ ~
         ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
            ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
```

> **Figure 2.1** – Pattern formed by iron filings sprinkled over a bar magnet. The filings align along curved trajectories that link the North and South poles, crowding densely near the extremities.

Notice that the lines formed by the filings are not physical threads; they are tangible representations of an underlying vector field that exists everywhere in the surrounding three-dimensional space.

---

## Part B: Magnetic Field Lines (Lines of Force)

To analyze and calculate magnetic interactions rigorously, nineteenth-century physicist Michael Faraday introduced the concept of **lines of force**, now universally called **magnetic field lines**.

> **Magnetic field line:** An imaginary continuous curve drawn through a magnetic field such that the tangent to the curve at any point indicates the direction of the magnetic field vector at that point, and the spatial density of the lines represents the field's relative strength.

Just as lines of latitude and longitude on a geographical globe are mathematical constructs used to navigate real physical geography, magnetic field lines are scientific constructs used to navigate and quantify real physical fields.

### Four Key Properties of Field Lines

1. **Continuous closed loops (External N to S, Internal S to N):**
   Outside the magnet, field lines emerge from the **North pole** and enter the **South pole**. Inside the magnet, the lines continue through the material, traveling from the **South pole back to the North pole**. Thus, magnetic field lines form **unbroken, continuous closed loops**. They have no distinct beginning or end.

2. **The tangent at any point gives field direction:**
   If you select any point on a curved field line and draw a straight tangent line in the direction of the line's arrow, that tangent vector specifies the exact direction of the magnetic field at that location. Physically, this is the direction in which a free, hypothetical isolated North pole would accelerate, or the direction in which the **North-seeking tip of a miniature compass needle points**.

3. **Field lines can never intersect:**
   If two field lines were to cross at a given point, two distinct tangents could be drawn at that intersection, implying that the magnetic field has two different directions simultaneously at the exact same point in space. This is physically impossible; a compass needle placed at that point can point in only one resultant direction. Therefore, **two field lines can never intersect or cross one another**.

4. **Line density reflects field strength:**
   The degree of closeness (spatial crowding) of the field lines represents the relative strength (flux density) of the magnetic field. Where the lines are closely packed together (as near the poles), the field is **strong**. Where the lines spread far apart, the field is **weak**.

### Magnetic Field Pattern of a Bar Magnet

The diagram below illustrates the complete two-dimensional field pattern of an isolated bar magnet. Outside the magnet, lines emerge from the North pole, curve smoothly through the surrounding space, and enter the South pole. Notice the high density of lines at the pole faces, reflecting the intense localized magnetic force.

```
                          ---->----
                       ~---       ----
                     ~~~             ~~~
                    ~~        -        ~~
                    (    ----->-----    ~
                    (  ^~-         -~v  )
                    ^ ~~  ---->----  ~~ v
                    ~~(~---       ----~~~
      ---------<-----[N═══════════════S]-------<-----
                    ~~(~---       ----~~~
                    v ~~  ---->----  ~~ ^
                    (  v~-         -~^  )
                    (    ----->-----    ~
                    ~~        ~        ~~
                     ~~~             ~~~
                       ~---       ----
                          ---->----
```

> **Figure 2.2** – Magnetic field pattern of a bar magnet. Outside the magnet, lines are directed from North to South (indicated by arrowheads); they crowd closely at the poles and spread out laterally.

Crucially, each field line forms a complete closed circuit by passing through the interior of the magnet from South to North:

```
                    ----->-----
                 ----         ---~
                ~~               ~~
               ~~                 ~~
              ^~                   v~
              (                     )
             [N<<<<<<<<<<<<<<<<<<<<<S]
```

> **Figure 2.3** – A single closed magnetic field line loop: directed externally from N to S, and internally from S to N (indicated by the internal "<" arrowheads).

### Field Pattern of a Horseshoe Magnet

In a horseshoe (or U-shaped) magnet, the bar is bent into a curve so that the North and South poles sit directly opposite one another across a narrow air gap.

In the central region between the two parallel pole faces, the field lines are **straight, parallel, and uniformly spaced**. This indicates that the magnetic field in this central gap is **uniform**—it has constant magnitude and identical direction at every point.

```
         .~~~~~~~~~~~>~~~~~~~~~~~.
        /                         \
       N                           S
     ┌───┐                       ┌───┐
     │   │   ────────────>       │   │
     │   │   ────────────>       │   │
     │   │   ────────────>       │   │
     │   │                       │   │
     │   └───────────────────────┘   │
     └───────────────────────────────┘
```

> **Figure 2.4** – Magnetic field between the poles of a horseshoe magnet. Between the parallel pole faces, the field lines are straight, parallel, and equidistant, producing a highly uniform magnetic field directed from N to S.

### Field Between Two Adjacent Magnets

When two bar magnets are placed near each other, their individual fields combine vectorially to produce a resultant field pattern.

**Case 1: Unlike poles facing (N opposite S):**
When a North pole faces a South pole, lines of force emerge from the North pole and pass directly across the intervening gap into the South pole. The lines shorten and pull inward like stretched elastic bands, visually illustrating **magnetic attraction**.

```
                            ---->----
                         ~---       ----
                       ~~~             ~~~
                      ~^ ------->------- v~
                      (~--             ---~
        [S═════════N] ---------->--------[S═════════N]
                      (~--             ---~
                      ~v ------->------- ^~
                       ~~~             ~~~
                         ~---       ----
                            ---->----
```

> **Figure 2.5** – Magnetic field between two unlike poles (N facing S). Field lines run directly across the gap from N to S, generating mutual attraction.

**Case 2: Like poles facing (N opposite N):**
When two like poles face each other, field lines emerging from both North poles cannot cross. Instead, they bend sharply away from each other, exerting lateral repulsive pressure. At the exact midpoint between the two identical poles, the two opposing magnetic fields are equal in magnitude and opposite in direction. They cancel each other completely, producing a point of zero net magnetic field called a **neutral point** (marked $X$).

```
       -----<-----                             ----->-----
     ~~-         -~~                         ~~-         -~~
    ~~------<------~~                       ~~------>------~~
    ~~-           ~~(                       )~~           -~~
   [S═══════════════N]         X           [N═══════════════S]
    ~~-           ~~(                       )~~           -~~
    ~~------<------~~                       ~~------>------~~
     ~~-         -~~                         ~~-         -~~
       -----<-----                             ----->-----
```

> **Figure 2.6** – Magnetic field between two like poles (N facing N). The field lines diverge laterally, illustrating mutual repulsion; the central point $X$ is a neutral point where the net field is zero.

---

## Part C: Plotting Field Lines Using a Plotting Compass

While iron filings give an immediate overall portrait of a magnetic field, the standard scientific method for mapping individual field lines with high precision is the **plotting compass method**.

A **plotting compass** is a miniature compass (typically $1.5\text{ to }2\text{ cm}$ in diameter) with a very short, low-inertia magnetic needle.

**Step-by-step laboratory procedure:**
1. Fix a sheet of plain drawing paper to a non-magnetic wooden board using adhesive tape.
2. Place a bar magnet at the center of the paper. Carefully trace its rectangular perimeter with a sharp pencil, and label its poles $N$ and $S$.
3. Place the plotting compass near the North pole of the magnet. Allow the needle to settle. Using a pencil, mark two distinct dots on the paper: **Dot 1** at the South end of the needle, and **Dot 2** at the North end of the needle.
4. Pick up the compass and shift it forward until its South end lies directly over Dot 2. Mark a new **Dot 3** at the needle's new North end.
5. Repeat this incremental leapfrogging step until the compass eventually reaches the South pole of the bar magnet.
6. Remove the compass. Join the sequence of pencil dots with a smooth, continuous freehand curve. Draw an arrowhead on the curve pointing from $N$ toward $S$.
7. Return to the North pole, place the compass at a slightly different starting point, and trace another field line. By repeating this process from multiple starting points around both poles, you will construct a complete, accurate field map.

```
                 o   o   o   o
             o                   o
          o                         o
         o                           o
        ^                             v
      [N═════════════════════════════S]
```

> **Figure 2.7** – Tracing a magnetic field line with a plotting compass. Each "o" marks a pencil dot placed at the needle's tip; connecting the dots yields a continuous field line directed from N to S.

---

## Part D: The Magnetic Compass and Solving the Captain's Questions

### Construction of a Magnetic Compass

> **Magnetic compass:** A navigational instrument consisting of a slender, lightweight magnetised steel needle delicately balanced on a frictionless central pivot, encased within a non-magnetic protective housing provided with a circular dial graduated in cardinal points and degrees.

The needle is mounted on a low-friction agate or synthetic sapphire jewel bearing resting atop a hard steel pivot point. The protective casing is manufactured from non-magnetic brass, aluminium, or molded plastic, with a transparent glass face. Because the casing contains no ferromagnetic material, it exerts no magnetic forces on the needle. The needle aligns itself freely with whatever ambient magnetic field exists at its location: **the North-seeking tip of the needle points directly in the direction of the local magnetic field**.

```
                   N (000°)
               .---------.
             .'     ^     '.
        W   (       ║       )   E (090°)
    (270°)   '.     ●     .'
               '-.  ║  .-'
                  '---'
                 S (180°)
```

> **Figure 2.8** – Construction of a navigational compass. A balanced magnetic needle pivots on a central bearing (●); the North tip (marked with an arrowhead or red paint) points toward the local magnetic north.

### Resolving Captain Harris's Questions

We can now resolve both of cadet Leo's inquiries on the ship's bridge:

**Question 1: Why did the needle remain locked in place when the ship turned?**
The Earth itself generates a massive planetary magnetic field (detailed in Part E below). The compass needle is immersed in this geomagnetic field. The field exerts a continuous magnetic torque on the needle, aligning its longitudinal axis with the local geomagnetic field vector. When the helmsman steered the ship, the ship's hull, the bridge deck, and the compass bowl rotated physically under the needle. But because the needle is supported on an almost frictionless central pivot, the rotating bowl could not exert significant mechanical torque on it. The geomagnetic field held the needle firmly aligned with the planetary North–South axis.

**Question 2: What happens if a heavy steel toolbox is placed beside the compass?**
A compass indicates true geomagnetic direction *only* when the Earth's field is the sole magnetic influence present.
- Carbon steel is a strongly **ferromagnetic material**.
- When the heavy toolbox is placed near the binnacle, the compass needle's magnetic field induces opposite magnetic poles in the nearby steel. The induced poles attract the needle, pulling it away from its natural geomagnetic alignment—a phenomenon known as **compass deviation**.
- Furthermore, if the steel toolbox has acquired any permanent residual magnetism from workshop tools or machining, or if nearby electrical cables carry direct current, the stray magnetic field will overpower the Earth's relatively weak field and point the compass in an entirely erroneous direction.

Captain Harris concluded: "Onboard any marine vessel or aircraft, compasses must be strictly isolated from ferromagnetic structures, heavy iron cargo, and high-current electrical cables. Navigation requires an untainted magnetic field." Leo immediately understood why the binnacle was crafted from solid brass rather than iron.

---

## Part E: The Earth as a Giant Magnet

Why does a freely suspended magnet or compass needle point northward anywhere on the globe?

In 1600, English scientist William Gilbert published *De Magnete*, proposing a revolutionary hypothesis that remains the foundation of geomagnetism: **the Earth itself behaves as an immense, spherical permanent magnet.**

The Earth's planetary magnetic field closely resembles the field that would be generated by a gigantic, powerful bar magnet buried deep within the planet's interior, tilted at an angle of approximately $10^\circ\text{ to }11.5^\circ$ with respect to the Earth's geographic axis of rotation.

```
                      Geographic North
                             :
                     .-~~~~~~:~~~~~-.
                  .-'         :  S    '-.
        ^        /            : ║       \        ^
        ^       (             :║         )       ^
        ^       (             ║:         )       ^
        ^       (            ║ :         )       ^
        ^        \          N  :        /        ^
                  '-.          :      .-'
                     '-~~~~~~~~:~~~~-'
                             :
                      Geographic South
```

> **Figure 2.9** – The Earth modeled as a giant planetary magnet. The axis of the hypothetical internal bar magnet is tilted by approximately $10^\circ$ relative to the geographic rotational axis. Crucially, the magnetic pole located in the northern hemisphere is physically a magnetic South pole ($S$).

### The Earth's Magnetic North is Physically a Magnetic South Pole

Consider a profound scientific paradox that frequently confuses students:
1. The North-seeking end of a compass needle is a **North magnetic pole**.
2. The fundamental law of magnetism dictates that **unlike poles attract** ($\text{N}$ attracts $\text{S}$).
3. Therefore, for the North pole of a compass needle to be pulled toward the northern Arctic regions, **the magnetic pole residing near the Earth's geographic north must physically be a magnetic SOUTH pole!**

Historically, early navigators named the northern pole of the Earth the "magnetic north pole" simply because compass North points toward it. In rigorous physical terms, however:
- The Earth's magnetic pole in the northern hemisphere (near northern Canada and Greenland) is physically a **magnetic South pole**.
- The Earth's magnetic pole in the southern hemisphere (near Antarctica) is physically a **magnetic North pole**.

Field lines emerge from the southern hemisphere (magnetic North), loop high above the globe through the atmosphere and space, and re-enter the planet in the northern hemisphere (magnetic South). Near the Earth's surface, the field lines point generally from South to North.

### Distinction Between Geographic and Magnetic Poles

The Earth's geographic and magnetic poles are entirely distinct entities:
- **Geographic poles:** The fixed endpoints of the Earth's rotational axis of spin ($90^\circ\text{ N}$ and $90^\circ\text{ S}$ latitude).
- **Magnetic poles:** The locations on the Earth's surface where geomagnetic field lines are oriented completely perpendicular (vertical) to the horizontal surface.
- The geomagnetic axis does not coincide with the rotational axis; it is tilted by approximately $10^\circ$. Consequently, magnetic north is situated hundreds of kilometers away from true geographic north.
- Unlike the fixed geographic poles, the Earth's magnetic poles are not stationary; they wander continuously across the Arctic and Antarctic terrain by tens of kilometers each year due to turbulent fluid motions in the core.

### Magnetic Declination and Dip

Navigators must account for two key geomagnetic angles:
1. **Magnetic Declination ($\theta$):**
   The horizontal angle between **geographic north (true north)** and **magnetic north** at any given location on the Earth's surface. A compass indicates magnetic north; to determine true geographic north, navigators apply the local declination correction indicated on nautical and aeronautical charts.
2. **Magnetic Dip or Inclination ($\delta$):**
   The vertical angle between the total geomagnetic field vector and the local horizontal plane. At the magnetic equator, the field lines run perfectly horizontal ($\text{dip } = 0^\circ$). As one travels toward the magnetic poles, the lines tilt progressively steeper, until at the magnetic poles, the field lines plunge straight down into or out of the ground ($\text{dip } = 90^\circ$).

### What Causes the Earth's Magnetic Field? (Brief Note)

The Earth is not a static block of magnetized lodestone. Deep beneath the silicate mantle lies the Earth's outer core, a $2,200\text{ km}$ thick shell of liquid iron and nickel. As the planet rotates, powerful convection currents churn this electrically conducting molten metal. The interaction between fluid motion, electrical currents, and planetary rotation creates a self-sustaining **geodynamo** that generates and maintains our planetary magnetic field. (The full mathematical treatment of geodynamos is explored in advanced physics courses.)

### Crucial Roles of the Earth's Magnetic Field

The geomagnetic field is not merely an aid to navigation; it is essential to the survival of terrestrial life:
- **Global navigation:** Enables shipping, aviation, military, and civilian orienteering via magnetic compasses and modern fluxgate magnetometers.
- **Animal navigation (magnetoreception):** Many migratory species—including migratory songbirds, sea turtles, monarch butterflies, salmon, and homing pigeons—possess biological magnetic sensors that allow them to use geomagnetic field vectors as an internal navigational map across thousands of kilometers.
- **The Magnetospheric Shield and Auroras:** The geomagnetic field extends tens of thousands of kilometers into space, forming the **magnetosphere**. This invisible shield deflects high-energy ionized particles streaming from the Sun (the solar wind) and lethal cosmic rays. When energetic solar particles become trapped in the polar magnetic funnel, they collide with atmospheric oxygen and nitrogen atoms, generating spectacular curtains of glowing green and violet light known as the **aurora borealis** (Northern Lights) and **aurora australis** (Southern Lights).

### Magnetic Shielding

Sensitive scientific instruments (such as electron microscopes, sensitive galvonometers, and precision clocks) often require complete protection from stray external magnetic fields.

Because magnetic monopoles do not exist, there is no material that can "absorb" or block magnetic field lines like an opaque wall blocks light. However, field lines can be **redirected**.

To achieve **magnetic shielding**, the sensitive instrument is enclosed inside a thick-walled ring or box made of **soft iron** or high-permeability magnetic alloys (such as *mu-metal*). Because soft iron offers an extraordinarily easy, low-resistance path for magnetic lines (high magnetic permeability), external field lines bend into the walls of the iron shield and travel entirely through the metal perimeter, bypassing the internal cavity. The space inside the shield remains virtually field-free.

---

## Part F: Solved Examples

**Example 1 (Compass orientation at 6 distinct locations):** A miniature plotting compass is placed sequentially at 6 marked locations surrounding a stationary bar magnet resting on a table, with its North pole on the left and South pole on the right. Determine the direction in which the **North-seeking tip** of the compass needle points at each position:

```
           5      1
           ·      ·

     3 ·  [N═════════════S] · 4

                  ·      ·
                  2      6
```

> **Figure 2.10** – Six compass positions surrounding a bar magnet: Positions 1 and 2 lie along the perpendicular bisector; Position 3 is on the longitudinal axis beyond the North pole; Position 4 is on the axis beyond the South pole; Position 5 is directly above the North pole; Position 6 is directly below the South pole.

**Solution:**
Rule: The North tip of the needle aligns with the local magnetic field vector (externally directed from N to S).
- **Position 1 (above the center of the magnet):** Field lines curve overhead from left to right (N toward S). The needle points horizontally **to the right ($\rightarrow$)**.
- **Position 2 (below the center of the magnet):** Field lines curve beneath from left to right (N toward S). The needle points horizontally **to the right ($\rightarrow$)**.
- **Position 3 (on the longitudinal axis, to the left of the North pole):** Field lines emerge axially outward from the North pole, directed toward the left. The needle points **to the left ($\leftarrow$)**.
- **Position 4 (on the longitudinal axis, to the right of the South pole):** Field lines enter the South pole axially from the right. The needle points **to the left ($\leftarrow$)**, toward the South pole.
- **Position 5 (directly above the North pole):** Field lines emerge upward and outward from the pole face. The needle points predominantly **upward ($\uparrow$)**.
- **Position 6 (directly below the South pole):** Field lines curve inward toward the South pole face. The needle points predominantly **upward ($\uparrow$)**, toward the South pole.

**Verification:** At Positions 1 and 2, lines travel parallel to the magnet axis from N to S ($\rightarrow$) ✅. At Position 3, lines emerge from N ($\leftarrow$) ✅. At Position 4, lines enter S ($\leftarrow$) ✅.

---

**Example 2 (Field between two colinear bar magnets):** Two identical bar magnets, Left ($L$) and Right ($R$), are placed colinearly along a straight line with a moderate gap between them. Determine the direction of the resultant magnetic field at the midpoint of the gap for four distinct pole orientations:

- **(i) N facing S ($L_{\text{right}} = \text{N}$, $R_{\text{left}} = \text{S}$):** Field lines emerge from the North pole of $L$ and enter the South pole of $R$. The resultant field at the midpoint is directed **to the right ($\rightarrow$)**.
- **(ii) S facing N ($L_{\text{right}} = \text{S}$, $R_{\text{left}} = \text{N}$):** Field lines emerge from the North pole of $R$ and enter the South pole of $L$. The resultant field at the midpoint is directed **to the left ($\leftarrow$)**.
- **(iii) N facing N ($L_{\text{right}} = \text{N}$, $R_{\text{left}} = \text{N}$):** The opposing fields from the two identical North poles are equal in magnitude and point in opposite directions at the midpoint. They cancel completely, producing a **neutral point ($B = 0$)**. Slightly to the left of the midpoint (near $L$'s N pole), the field points **to the right ($\rightarrow$)**; slightly to the right (near $R$'s N pole), it points **to the left ($\leftarrow$)**.
- **(iv) S facing S ($L_{\text{right}} = \text{S}$, $R_{\text{left}} = \text{S}$):** At the exact midpoint, the opposing attractive field vectors cancel completely, yielding a **neutral point ($B = 0$)**. To the left of the midpoint, the field is directed toward $L$'s S pole (**to the left, $\leftarrow$**); to the right, it is directed toward $R$'s S pole (**to the right, $\rightarrow$**).

**Verification:** Unlike arrangements (i and ii) reinforce across the gap; like configurations (iii and iv) produce exact vector cancellation at the midpoint ✅.

---

**Example 3 (Comparing field strength at two test points):** Point P is located $5\text{ mm}$ from the North pole face of a bar magnet where field lines are densely crowded. Point Q is located $150\text{ mm}$ away from the magnet where field lines are widely spaced. At which point is the magnetic field stronger?

**Solution:**
By the fourth fundamental property of magnetic field lines, the relative intensity of a magnetic field is directly proportional to the spatial line density. Because field lines crowd together tightly near the pole face at Point P and diverge widely at distant Point Q, **the magnetic field is substantially stronger at Point P**.

**Verification:** This matches the empirical observation from Topic 1 that pins cling in large quantities at the pole faces and experience virtually no pull at large separations ✅.

---

**Example 4 (Quantifying field line density):** Two identical square test frames of equal area ($1\text{ cm}^2$), Frame P and Frame Q, are positioned in a mapped field. Frame P is placed near the pole of a bar magnet and encloses 5 field lines. Frame Q is placed at a distant location and encloses 2 field lines. Determine which region has the stronger field and calculate the approximate ratio of their magnetic field strengths.

```
 Frame P (near pole)              Frame Q (distant region)
 ┌─────────────────┐              ┌─────────────────┐
 │ ───────────>    │              │                 │
 │ ───────────>    │              │ ───────────>    │
 │ ───────────>    │              │                 │
 │ ───────────>    │              │ ───────────>    │
 │ ───────────>    │              │                 │
 └─────────────────┘              └─────────────────┘
```

> **Figure 2.11** – Equal-area test windows placed in regions of high and low field strength. Frame P encloses 5 lines, while Frame Q encloses 2 lines.

**Solution:**
- Frame P encloses 5 lines; Frame Q encloses 2 lines.
- **The magnetic field is stronger at Frame P.**
- The ratio of field intensities is approximately equal to the ratio of line counts across identical areas:
  $$\text{Ratio} = \frac{N_P}{N_Q} = \frac{5}{2} = \mathbf{2.5}$$
  The magnetic field at Point P is approximately **$2.5\text{ times}$ as strong** as at Point Q.

**Verification:** $2 \times 2.5 = 5\text{ lines}$ ✅.

---

**Example 5 (Completing field line arrowheads):** Three continuous magnetic field lines ($a$, $b$, and $c$) are sketched outside a bar magnet whose North pole is on the left and South pole is on the right. Arrowheads have been omitted. Specify the exact direction in which arrowheads must be drawn on lines $a$, $b$, and $c$:

```
                   ------a------
                 ~~-           --~
                ~~       b       ~~
                (   -----------   ~
               (  ~~-         -~~  )
               (~~~  ----c----  ~~))
                ~(~---       ----~~
                [N═══════════════S]
```

> **Figure 2.12** – Three field line loops sketched outside a bar magnet without directional arrows; North pole is on the left, South pole on the right.

**Solution:**
Outside any magnet, magnetic field lines always emerge from the North pole and travel toward the South pole.
- Along the upper arcs of curves $a$, $b$, and $c$, the arrows must point **from left to right ($\rightarrow$)**.
- On the left side near the North pole, the arrows must point **upward and outward ($\uparrow$)**.
- On the right side near the South pole, the arrows must point **downward and inward ($\downarrow$)**.

**Verification:** Every external trajectory flows continuously from the North pole on the left to the South pole on the right ✅.

---

**Example 6 (Compass deviation near a ferromagnetic toolbox):** A magnetic compass is placed on a table. When a large structural carbon steel toolbox is set directly beside the compass:
(a) Predict and explain the response of the compass needle.
(b) How would the needle respond if the toolbox had previously acquired strong permanent magnetization, with its South pole facing the compass?

**Solution:**
(a) Carbon steel is an unmagnetised ferromagnetic material. The magnetic field of the compass needle induces magnetic poles in the adjacent steel walls, resulting in mutual attraction. Consequently, **the needle swings (deflects) toward the steel toolbox**, deviating from true geomagnetic north.
(b) If the toolbox possesses a permanent South pole facing the compass, unlike poles attract. The **North-seeking tip of the compass needle will be strongly pulled toward the toolbox**, causing severe directional deviation.

**Verification:** Unlike magnetic poles attract; unmagnetised ferromagnetic objects always attract a magnetic pole via induction ✅.

---

**Example 7 (Compass between the arms of a horseshoe magnet):** A small plotting compass is placed in the center of the air gap between the two arms of a horseshoe magnet. The left arm is the North pole and the right arm is the South pole. Which direction does the North-seeking tip of the needle point?

**Solution:**
Between the pole faces of a horseshoe magnet, field lines run horizontally from the North pole (left arm) to the South pole (right arm). The compass needle aligns with the local field vector. Therefore, the North-seeking tip points **to the right ($\rightarrow$)**, toward the South pole arm.

**Verification:** The North tip of a compass is attracted toward a South pole and repelled from a North pole ✅.

---

**Example 8 (The physical nature of the Earth's northern magnetic pole):** Explain why the Earth's geographic North corresponds physically to a magnetic South pole.

**Solution:**
1. A magnetic compass needle is an artificial magnet whose north-pointing extremity is, by definition, a North magnetic pole.
2. The fundamental law of magnetism states that like poles repel and unlike poles attract.
3. Because the North pole of the compass needle is attracted toward the northern polar region of the Earth, the magnetic pole situated in that region must exert an attractive force on an N pole.
4. Therefore, the Earth's magnetic pole in the northern hemisphere must physically be a **magnetic South pole**. (It is called "magnetic north" strictly in a geographic sense, because it is located in the northern hemisphere).

**Verification:** Opposite poles attract: $\text{Compass N} \longleftrightarrow \text{Earth's Magnetic S}$ ✅.

---

**Example 9 (Navigational calculations with magnetic declination):**
*Sign convention:* A declination of $3^\circ\text{ East}$ means that magnetic north lies $3^\circ$ clockwise (east) of true geographic north. A compass measures angular bearing relative to magnetic north. A navigator wishes to sail along a true geographic bearing of $090^\circ$ (due East).
(a) What heading should the ship's magnetic compass display if the local declination is $3^\circ\text{ East}$?
(b) What heading should the compass display if the declination is $3^\circ\text{ West}$?
(c) What is the difference between these two compass readings?

**Solution:**
(a) For an Easterly declination, magnetic north is shifted $3^\circ$ to the right of true north. Therefore, every geographic direction has a compass bearing that is $3^\circ$ smaller:
$$\text{Compass reading} = \text{True bearing} - \text{Declination} = 90^\circ - 3^\circ = \mathbf{087^\circ}$$
(b) For a Westerly declination, magnetic north lies $3^\circ$ to the left of true north. The compass reading must be $3^\circ$ larger:
$$\text{Compass reading} = \text{True bearing} + \text{Declination} = 90^\circ + 3^\circ = \mathbf{093^\circ}$$
(c) The difference between the two readings:
$$\Delta = 93^\circ - 87^\circ = \mathbf{6^\circ} \quad (= 2 \times 3^\circ)$$

**Verification:**
For East: $\text{True} = 87^\circ + 3^\circ = 90^\circ$ ✅.
For West: $\text{True} = 93^\circ - 3^\circ = 90^\circ$ ✅.

---

**Example 10 (Determining true ship heading from compass reading):** A vessel's steering compass indicates a heading of $150^\circ$. Nautical charts indicate a local magnetic declination of $3^\circ\text{ West}$.
(a) Calculate the vessel's true geographic heading.
(b) What would the true heading be if the declination were $3^\circ\text{ East}$?

**Solution:**
(a) With a Westerly declination of $3^\circ\text{ W}$, magnetic north is tilted west of true north, so the true heading is $3^\circ$ less than the compass reading:
$$\text{True heading} = \text{Compass heading} - 3^\circ = 150^\circ - 3^\circ = \mathbf{147^\circ}$$
(b) With an Easterly declination of $3^\circ\text{ E}$, true north lies counter-clockwise from magnetic north:
$$\text{True heading} = \text{Compass heading} + 3^\circ = 150^\circ + 3^\circ = \mathbf{153^\circ}$$

**Verification:**
West: $147^\circ + 3^\circ = 150^\circ$ ✅.
East: $153^\circ - 3^\circ = 150^\circ$ ✅.

---

## Common Pitfalls to Avoid

1. **Mistake 1: Believing that magnetic field lines are physical, tangible threads.**
   Magnetic field lines do not exist as physical wires or strings in space. They are mathematical and visual models used to represent the continuous direction and relative intensity of an invisible vector field. Iron filings merely align themselves along the local field lines; they do not create them.

2. **Mistake 2: Assuming magnetic field lines can intersect.**
   Students occasionally draw field lines that cross each other. This is physically impossible. At any single point in space, there can only be one resultant magnetic field vector. If lines crossed, a compass needle placed at that point would have to point in two different directions simultaneously.

3. **Mistake 3: Thinking field lines exist only outside the magnet.**
   A common error is assuming field lines start at the North pole and terminate at the South pole. In reality, field lines are continuous closed loops. They continue directly through the interior of the magnet, traveling from the South pole back to the North pole.

4. **Mistake 4: Reversing the direction of external field lines.**
   Students frequently confuse the direction of field lines, drawing them from South to North externally. Always remember: **externally, field lines travel from North to South**; internally, they complete the loop from South to North.

5. **Mistake 5: Assuming the Earth's geographic North pole is a physical magnetic North pole.**
   Because the North-seeking pole of a compass points toward the Arctic, students often assume that the Earth's northern magnetic pole is an N pole. But unlike poles attract! For the N pole of a compass to be pulled toward the Arctic, the Earth's northern magnetic pole must physically be a **magnetic South pole**.

6. **Mistake 6: Conflating geographic poles with magnetic poles.**
   Geographic poles mark the rotational spin axis of the Earth and are geographically fixed. The Earth's magnetic poles are tilted by approximately $10^\circ$ to $11.5^\circ$ from the spin axis, are located hundreds of kilometers away from the true poles, and wander continuously over time due to convection in the liquid core.

---

## Quick Recap

- A **magnetic field** is the region surrounding a magnet where magnetic forces are exerted and detected. It is strongest near the poles and weakens smoothly with increasing distance.
- **Magnetic field lines** are imaginary continuous curves representing field direction and relative intensity.
- **Properties of field lines:**
  - Form continuous **closed loops**: externally directed from North to South, internally from South to North.
  - The **tangent** at any point indicates the direction of the magnetic field vector.
  - Field lines **never intersect**, ensuring a single unique field direction at every point.
  - Spatial **line density** indicates field strength: crowded lines signify a strong field; widely spaced lines signify a weak field.
- In a **horseshoe magnet**, the field lines across the central air gap are straight, parallel, and uniformly spaced, forming a **uniform magnetic field**.
- Between unlike poles ($\text{N–S}$), field lines run straight across, producing **attraction**. Between like poles ($\text{N–N}$), lines diverge laterally, creating mutual **repulsion** and leaving a central **neutral point** where the net field is zero.
- Field lines can be mapped experimentally using iron filings or incrementally using a **plotting compass**.
- A **magnetic compass** consists of a balanced, low-inertia magnetic needle pivoted inside a non-magnetic casing. Its North-seeking tip aligns with the local magnetic field vector.
- The **Earth behaves as a gigantic planetary magnet** tilted at approximately $10^\circ$ to $11.5^\circ$ relative to its rotational axis.
- The Earth's magnetic pole in the northern hemisphere is physically a **magnetic South pole**, which is why it attracts the North-seeking pole of compass needles.
- **Magnetic declination** is the horizontal angle between geographic true north and magnetic north. **Magnetic dip** is the angle the field makes with the horizontal plane.
- The Earth's field is generated by convective dynamo currents of molten iron in the outer core. It enables navigation, guides migratory wildlife, and forms the magnetosphere that shields terrestrial life from lethal cosmic rays and produces auroras.
- **Magnetic shielding** uses soft iron enclosures to channel field lines through high-permeability metal walls, protecting sensitive internal instruments.

---

## Practice Questions

1. Define a magnetic field. Where is the magnetic field of a bar magnet strongest?
2. State any three fundamental properties of magnetic field lines.
3. State whether each statement is True or False:
   (a) Magnetic field lines are real, physical threads existing in space.
   (b) Two magnetic field lines can cross each other if the magnets are sufficiently strong.
   (c) Outside a permanent magnet, field lines are directed from the North pole to the South pole.
   (d) Magnetic field lines terminate at the surface of a magnet and do not exist inside it.
   (e) The Earth's magnetic pole located near geographic north is physically a magnetic South pole.
4. A miniature plotting compass is placed on the longitudinal axis of a bar magnet, just beyond its South pole. In which direction does the North-seeking tip of the needle point?
5. Across a small test window of fixed area at Point X, 6 field lines are counted. Across an identical window at Point Y, 3 field lines are counted. At which point is the magnetic field stronger, and by what factor?
6. Describe the geometric pattern of magnetic field lines formed between two like magnetic poles facing each other. What is the specific point between them where the resultant field is zero called?
7. Explain with physical reasoning why two magnetic field lines can never intersect.
8. State the direction of magnetic field lines inside the body of a permanent bar magnet.
9. A ship's magnetic compass displays a heading of $060^\circ$ at a location where nautical charts indicate a magnetic declination of $3^\circ\text{ East}$. Calculate the ship's true geographic heading.
10. A marine vessel is navigating along a true geographic heading of $180^\circ$ (due South). If the local magnetic declination is $3^\circ\text{ West}$, what heading should the helmsman maintain on the magnetic steering compass?
11. Explain why a marine compass needle deflects away from true magnetic north when a heavy steel toolbox is placed beside the binnacle.
12. Why is the Earth's "magnetic north pole" physically classified as a magnetic South pole?
13. List in sequential chronological order the laboratory steps required to trace a magnetic field line using a plotting compass.
14. A plotting compass is positioned midway between the two parallel arms of a horseshoe magnet. The left arm is the North pole and the right arm is the South pole. Toward which arm does the North-seeking tip of the compass needle point?
15. A compass needle pointing due north ($000^\circ$) rotates $90^\circ$ clockwise when a bar magnet is introduced nearby, and subsequently rotates $45^\circ$ counter-clockwise when the magnet is partially retracted. What is the needle's final angular heading measured from north?

---

### Answers

1. A **magnetic field** is the space or region surrounding a magnet within which its magnetic force is exerted and can be detected by other magnets or magnetic materials. The field of a bar magnet is strongest **near its magnetic poles**.

2. Any three of the following properties:
   - Magnetic field lines form continuous closed loops (directed from N to S outside the magnet, and from S to N inside).
   - The tangent to a field line at any point indicates the precise direction of the magnetic field vector at that point.
   - Field lines never intersect or cross one another.
   - The line density represents the relative intensity of the field (dense lines indicate a strong field; widely spaced lines indicate a weak field).

3. (a) **False** ❌: Field lines are imaginary scientific models used to visualize and calculate field properties.
   (b) **False** ❌: Field lines can never intersect under any circumstances.
   (c) **True** ✅: Externally, field lines travel from North to South.
   (d) **False** ❌: Field lines continue through the interior of the magnet from South to North, forming closed loops.
   (e) **True** ✅: The Earth's northern magnetic pole physically attracts North poles, meaning it is physically a South magnetic pole.

4. The North-seeking tip of the compass needle points **toward the magnet (directly toward the South pole, $\leftarrow$)**.
   *Reasoning:* Outside the magnet, field lines enter the South pole axially; the compass needle aligns with the field vector pointing directly into the S pole face.

5. The magnetic field is stronger at **Point X** (where line density is twice as high).
   $$\text{Factor} = \frac{6}{3} = \mathbf{2\text{ times as strong}}$$
   *Verification:* $3 \times 2 = 6\text{ lines}$ ✅.

6. The field lines emerge from each North pole, curve sharply outward away from each other without touching, and diverge laterally into surrounding space. The localized point midway between them where the opposing field vectors cancel completely to zero is called a **neutral point**.

7. If two field lines crossed at a point, two different tangents could be drawn at the exact same location. This would imply that the magnetic field possesses two distinct directions simultaneously at that point. Because a magnetic compass needle placed at any single point can point in only one resultant direction, a magnetic field can have only one unique direction at any location. Hence, field lines can never cross.

8. Inside the body of a bar magnet, field lines are directed **from the South pole to the North pole** ($\text{S to N}$), completing the closed magnetic circuit.

9. For an Easterly declination ($3^\circ\text{ E}$), magnetic north lies $3^\circ$ clockwise of true north. Thus:
   $$\text{True heading} = \text{Compass heading} + \text{Declination} = 60^\circ + 3^\circ = \mathbf{063^\circ}$$
   *Verification:* $63^\circ - 3^\circ = 60^\circ$ ✅.

10. For a Westerly declination ($3^\circ\text{ W}$), magnetic north lies $3^\circ$ counter-clockwise of true north. The compass heading must be $3^\circ$ greater than the true heading:
    $$\text{Compass heading} = \text{True heading} + 3^\circ = 180^\circ + 3^\circ = \mathbf{183^\circ}$$
    *Verification:* $\text{True} = 183^\circ - 3^\circ = 180^\circ$ ✅.

11. Carbon steel is a ferromagnetic material. The magnetic field of the compass needle induces magnetic poles in the nearby steel toolbox. The resulting magnetic attraction pulls the needle toward the toolbox, causing mechanical deviation and producing an erroneous directional reading.

12. A compass needle's north-pointing end is physically a North magnetic pole. Because unlike magnetic poles attract, an N pole can only be attracted toward an opposite, South magnetic pole. Therefore, the Earth's magnetic pole located in the Arctic region must physically possess **South magnetic polarity**.

13. Correct experimental sequence:
    1. Fasten paper to a non-magnetic board, place the bar magnet at the center, trace its outline, and label poles N and S.
    2. Place the plotting compass near the North pole; mark pencil dots at both the South and North ends of the needle.
    3. Shift the compass forward until its South end lies precisely over the previously marked North dot; mark a new dot at the North end.
    4. Repeat this step-by-step dot placement sequentially until the compass reaches the South pole.
    5. Remove the compass and join the series of dots with a smooth, continuous curve; add an arrowhead pointing from N toward S.

14. The North-seeking tip points **to the right (directly toward the South arm, $\rightarrow$)**.
    *Reasoning:* Between the arms of a horseshoe magnet, field lines run horizontally from the North arm to the South arm.

15. Total angular displacement:
    $$\theta_{\text{final}} = 90^\circ\text{ (clockwise)} - 45^\circ\text{ (counter-clockwise)} = \mathbf{045^\circ\text{ clockwise from North}}$$
    *Verification:* $45^\circ + 45^\circ = 90^\circ$ ✅.

---

Splendid work! You have now mastered magnetic fields, field lines, compass navigation, and the planetary magnetism of the Earth. In Topic 3, we will investigate how unmagnetised iron objects can be converted into artificial magnets, and how magnets can lose their power: **Magnetisation and Demagnetisation**.
