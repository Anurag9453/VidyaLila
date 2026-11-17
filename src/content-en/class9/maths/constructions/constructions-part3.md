# Chapter: Constructions (Part 3)

> **Class:** 9 | **Subject:** Mathematics
> **This file continues from [constructions-part2.md](constructions-part2.md)** (where we constructed angle bisectors, $60^\circ, 30^\circ, 120^\circ, 90^\circ, 45^\circ$, composite angles, and copied angles). The chapter begins in [constructions.md](constructions.md) with geometry box tools, copying segments, and perpendicular bisectors.
> **Topics covered in this file:**
> 3. Constructing Perpendicular and Parallel Lines

---

# Topic 3: Constructing Perpendicular and Parallel Lines

In Topic 2, we constructed angles with only a compass and ruler: Maya's $60^\circ$ star corner, $90^\circ$, $45^\circ$, and exact angle copies. Now let us put those skills to work on **straight lines**. Two special relationships between straight lines appear everywhere in design and engineering: lines that meet at exactly $90^\circ$ (**perpendicular**), and lines that stay the same distance apart and never meet (**parallel**). To construct both, we will simply reuse Topic 1's perpendicular bisector and Topic 2's angle copy — no magic tricks required.

---

## The Underground Car Park Bays

In a new shopping centre's underground car park, a crew had to paint neat parking bays along the main driving lane. Dr. Bennett was supervising the layout alongside a new apprentice, Liam.

The concrete floor was completely blank except for one long painted **lane line** down the middle where cars would drive. The architectural blueprint was strict:

- Every parking bay's side lines must meet the lane line at **exactly $90^\circ$**.
- All bay dividers must be **parallel** to one another.
- Every bay must be **$2.5\text{ metres}$ wide**.

Liam picked up a stick of chalk and asked, "Dr. Bennett, why don't we just eyeball the straight lines? You've been laying out projects for years."

Dr. Bennett smiled. "If you eyeball it, the first car bay tilts slightly, the second tilts a bit more. A $5\text{ cm}$ drift in the first bay turns into a $50\text{ cm}$ drift by the tenth bay — nobody would be able to open their car doors! Instead, I brought three tools: **string, chalk, and a chalk compass.**"

"A chalk compass?"

"Watch. Take a length of cord with knots tied every $1\text{ metre}$. Hold one end pinned to the floor, tie chalk to the other end, pull it taut, and swing an arc across the concrete. It is the exact same compass you use at school — just scaled up."

Liam nodded. "So on paper, we use a scale of **$1\text{ cm} = 1\text{ metre}$** first?" "Precisely," Dr. Bennett replied. "Once the scale drawing is exact, we repeat the exact same steps full-size on the floor."

Let us learn with Liam on paper first: how to construct perpendiculars, how to construct parallels, and how "$2.5\text{ metres}$" translates to "$2.5\text{ cm}$". We will paint the entire car park bay layout in Part F!

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Perpendicular ($\perp$)** | Two lines that intersect at a $90^\circ$ right angle | A parking bay divider meeting the lane line |
| **Foot of the perpendicular** | The exact point where a perpendicular line meets the given line | Point $M$ in Part B |
| **Parallel lines ($\parallel$)** | Two lines in the same plane that never intersect and stay equidistant | Adjacent dividers of parking bays |
| **Transversal** | A straight line that cuts across two or more other lines | Line $DA$ in Part C |
| **Corresponding angles** | A matching pair of angles on the same side of a transversal (e.g., both upper-right) | $\angle CAB$ and $\angle DPE$ in Part C |
| **Rhombus** | A quadrilateral with all four sides equal in length | $PABC$ in the extra method of Part C |
| **Distance (between parallel lines)** | The length of the perpendicular dropped from any point on one line to the other | $3\text{ cm}$ in Part D |
| **Scale** | The ratio converting real-world lengths into a smaller drawing | $1\text{ cm} = 1\text{ metre}$ |

---

## Part A: Perpendicular to a Line at a Point on the Line

**Question:** Given a line $l$ and a point $P$ on $l$, construct a line perpendicular to $l$ passing through $P$.

Think about how to make this easy: turn $P$ into the **midpoint** of a segment on $l$, then construct that segment's **perpendicular bisector** (Topic 1). Since the bisector passes through the midpoint $P$ at $90^\circ$, it is the exact perpendicular we need!

**Given:** Line $l$ and point $P$ lying on $l$.

**Steps of Construction**

- **Step 1:** Draw line $l$ and mark a point $P$ on it.
- **Step 2:** With centre $P$ and radius $2\text{ cm}$, draw arcs cutting line $l$ on both sides of $P$: label the left intersection $A$ and the right intersection $B$. Now $PA = PB = 2\text{ cm}$, so $P$ is the midpoint of $AB$.
- **Step 3:** With centre $A$ and radius $3\text{ cm}$ (more than half of $AB$, which is $2\text{ cm}$), draw an arc above line $l$.
- **Step 4:** With centre $B$ and the **same radius $3\text{ cm}$** (do not change the compass opening), draw another arc above $l$ cutting the previous arc at $Q$.
- **Step 5:** Use a ruler to join $P$ and $Q$, extending line $PQ$ below $P$ if desired.

> **Figure 3.1** – Point $P$ on line $l$; points $A$ and $B$ marked $2\text{ cm}$ on either side of $P$; $3\text{ cm}$ arcs from $A$ and $B$ intersect above at $Q$; $PQ \perp l$.

**Why Does It Work?**

Consider $\triangle APQ$ and $\triangle BPQ$:
- $AP = BP = 2\text{ cm}$ (Step 2)
- $AQ = BQ = 3\text{ cm}$ (Steps 3 and 4, equal radii)
- $PQ = PQ$ (common side)

By **SSS** ([congruence-of-triangles-part2.md](../congruence-of-triangles/congruence-of-triangles-part2.md)), $\triangle APQ \cong \triangle BPQ$. Hence $\angle APQ = \angle BPQ$ (CPCT).

Since $A, P, B$ lie on the straight line $l$, $\angle APQ + \angle BPQ = 180^\circ$. Because they are equal, each is $180^\circ \div 2 = \mathbf{90^\circ}$. Therefore, $PQ \perp l$.

**Check:** Place the $90^\circ$ corner of a set square at $P$ with one edge along $l$: the other edge aligns cleanly with $PQ$. A protractor confirms $\angle APQ = 90^\circ$. ✅

---

## Part B: Perpendicular to a Line from a Point Outside the Line

**Question:** Given a line $l$ and a point $P$ not on $l$, drop a perpendicular from $P$ to $l$.

Idea: Swing an arc from $P$ that cuts $l$ at two points $A$ and $B$, making $PA = PB$. Then find one more point $Q$ equidistant from $A$ and $B$. Since both $P$ and $Q$ are equidistant from $A$ and $B$, line $PQ$ must be the perpendicular bisector of $AB$!

**Given:** Line $l$ and an external point $P$ ($4\text{ cm}$ above $l$).

**Steps of Construction**

- **Step 1:** Draw line $l$ and mark a point $P$ about $4\text{ cm}$ above $l$.
- **Step 2:** With centre $P$ and radius $5\text{ cm}$, draw an arc cutting line $l$ at two points: $A$ on the left and $B$ on the right. (The radius must be **greater** than the $4\text{ cm}$ distance from $P$ to $l$ so that the arc reaches and crosses $l$.)
- **Step 3:** With centre $A$ and radius $4\text{ cm}$, draw an arc **below** line $l$ (on the side opposite $P$). (Half of $AB$ is $3\text{ cm}$, and $4\text{ cm} > 3\text{ cm}$.)
- **Step 4:** With centre $B$ and the **same radius $4\text{ cm}$**, draw an arc below $l$ cutting the previous arc at $Q$.
- **Step 5:** Join $P$ and $Q$. Line $PQ$ intersects line $l$ at point $M$.

> **Figure 3.2** – Line $l$ and external point $P$ ($4\text{ cm}$ above $l$); arc from $P$ cuts $l$ at $A$ and $B$; $4\text{ cm}$ arcs from $A$ and $B$ intersect below $l$ at $Q$; $PQ$ cuts $l$ at $M$, and $PM \perp l$.

**Why Does It Work?**

- $PA = PB = 5\text{ cm}$ (Step 2), so $P$ lies on the perpendicular bisector of $AB$.
- $QA = QB = 4\text{ cm}$ (Steps 3 and 4), so $Q$ also lies on the perpendicular bisector of $AB$.
- Since only one straight line passes through two distinct points, $PQ$ is the perpendicular bisector of $AB$. Thus $PQ \perp l$, and $M$ is the midpoint of $AB$.

You can also prove this directly with SSS and SAS: in $\triangle APQ$ and $\triangle BPQ$, $PA = PB$, $QA = QB$, and $PQ$ is common, so $\triangle APQ \cong \triangle BPQ$ (SSS) and $\angle APQ = \angle BPQ$. Then in $\triangle APM$ and $\triangle BPM$, $PA = PB$, $\angle APM = \angle BPM$, and $PM$ is common, so $\triangle APM \cong \triangle BPM$ (SAS), giving $\angle AMP = \angle BMP = 90^\circ$ on straight line $l$.

Why place $Q$ on the **opposite side** of $l$ from $P$? Arcs on the same side as $P$ would also cross (here only about $2.6\text{ cm}$ above $l$, close to $P$ — and if you used radius $5\text{ cm}$, they would meet right at $P$ itself, giving no second point at all!). Two points close together make any tiny ruler wobble tilt the line badly. Placing $Q$ across $l$ keeps $P$ and $Q$ far apart for a crisp, accurate line.

**Numerical check:** $PM = 4\text{ cm}$ ($P$ is $4\text{ cm}$ above $l$). In right $\triangle APM$, $AP = 5\text{ cm}$ and $PM = 4\text{ cm}$, so $AM = 3\text{ cm}$ (since $3^2 + 4^2 = 5^2$). Thus $M$ is $3\text{ cm}$ from $A$, the exact midpoint of $AB = 6\text{ cm}$. ✅

**Check:** Align one edge of a set square along $l$ and check that the other aligns with $PQ$, or measure $\angle PMB$ with a protractor: $90^\circ$. ✅

---

## Part C: Parallel Line Through a Given Point (Copying an Angle)

**Question:** Given a line $l$ and a point $P$ not on $l$, construct a line through $P$ parallel to $l$.

Idea: Draw any transversal passing through $P$ and cutting $l$. Then **copy** the angle formed at $l$ onto $P$ in the matching (corresponding) position using Topic 2's angle-copy method. If corresponding angles are equal, the lines are parallel ([lines-and-angles-part3.md](../lines-and-angles/lines-and-angles-part3.md)).

**Given:** Line $l$ and point $P$ outside $l$.

**Steps of Construction**

- **Step 1:** Pick any point $A$ on line $l$ (somewhere below and to the left of $P$). Join $P$ and $A$, extending ray $AP$ slightly beyond $P$. This is our transversal.
- **Step 2:** With centre $A$ and radius $2\text{ cm}$, draw an arc cutting $l$ at $B$ (to the right of $A$) and transversal $AP$ at $C$.
- **Step 3:** With centre $P$ and the **same radius $2\text{ cm}$**, draw a sweeping arc cutting the extended transversal above $P$ at $D$ and curving to the right.
- **Step 4:** Place the compass needle at $B$ and open it until the pencil reaches $C$, capturing the chord length $BC$.
- **Step 5:** With centre $D$ and radius equal to $BC$, draw an arc cutting the Step 3 arc on the **right** side of the transversal at point $E$.
- **Step 6:** Join $P$ and $E$ and extend the line in both directions. Call this line $m$.

> **Figure 3.3** – Point $A$ on line $l$; transversal $DPA$ ($D$ above $P$); $2\text{ cm}$ arc at $A$ cuts $l$ at $B$ and $AP$ at $C$; $2\text{ cm}$ arc at $P$ marks $D$ and $E$ (with $DE = BC$); line $m = PE \parallel l$.

**Why Does It Work?**

In $\triangle CAB$ and $\triangle DPE$:
- $AC = PD = 2\text{ cm}$ (equal arc radii)
- $AB = PE = 2\text{ cm}$ (equal arc radii)
- $CB = DE$ (Steps 4 and 5)

By **SSS**, $\triangle CAB \cong \triangle DPE$, so **$\angle DPE = \angle CAB$**. These two angles lie in matching (upper-right) positions along transversal $DA$ — they are **corresponding angles**. Equal corresponding angles guarantee **$m \parallel l$**.

**Check:** Measure $\angle CAB$ and $\angle DPE$ with a protractor: they should be equal. Also measure the perpendicular distance between $l$ and $m$ at $3$ or $4$ spots: it should stay constant everywhere. ✅

**Using alternate angles instead:** If you copy $\angle CAB$ onto the **opposite** side of the transversal at $P$, you create equal alternate interior angles, which also makes the lines parallel.

### Extra: The Rhombus Method (Fewer Steps, One Radius)

This clever shortcut requires no angle-copying measurement — just three arcs with the **same** compass radius!

**Given:** Line $l$ and point $P$ ($3\text{ cm}$ above $l$).

**Steps of Construction**

- **Step 1:** With centre $P$ and radius $4\text{ cm}$ (greater than the $3\text{ cm}$ distance to $l$), draw an arc cutting $l$ at $A$.
- **Step 2:** With centre $A$ and the **same radius $4\text{ cm}$**, draw an arc cutting $l$ to the right at $B$, so $AB = 4\text{ cm}$.
- **Step 3:** With centre $P$ and radius $4\text{ cm}$, draw an arc above $l$ toward $B$.
- **Step 4:** With centre $B$ and radius $4\text{ cm}$, draw an arc cutting the Step 3 arc at $C$ (choose the point above $l$, not $A$).
- **Step 5:** Join $P$ and $C$ and extend the line.

> **Figure 3.4** – Line $l$ and external point $P$ ($3\text{ cm}$ above $l$); $A$ and $B$ on $l$ with $PA = AB = BC = CP = 4\text{ cm}$; $PABC$ is a rhombus and line $PC \parallel l$.

**Why Does It Work?** Since $PA = AB = BC = CP = 4\text{ cm}$, all four sides are equal, making $PABC$ a rhombus. Join diagonal $AC$: $\triangle ABC \cong \triangle CPA$ by SSS ($AB = CP$, $BC = PA$, $AC$ common), so $\angle BAC = \angle PCA$. These are alternate interior angles for transversal $AC$, so $PC \parallel AB$, i.e., $PC \parallel l$.

**Check:** Measure the perpendicular distance from $P$ to $l$ and from $C$ to $l$: both equal $3\text{ cm}$. ✅

---

## Part D: Distance Between Two Parallel Lines

**What is the distance between two parallel lines?** It is the length of a **perpendicular** segment dropped from any point on one line to the other line. Measuring along a slanted segment gives a larger number, not the true distance. The defining beauty of parallel lines is that this perpendicular distance is **identical everywhere**.

**Question:** Construct a line parallel to line $l$ at a distance of $3\text{ cm}$ from $l$.

Idea: Pick two points on $l$, erect a $3\text{ cm}$ perpendicular at each point, and join their top endpoints.

**Given:** Line $l$ with segment $XY = 5\text{ cm}$ on it.

**Steps of Construction**

- **Step 1:** Draw line $l$ and mark $XY = 5\text{ cm}$ on it.
- **Step 2:** With centre $X$ and radius $2\text{ cm}$, cut $l$ on both sides of $X$ at $X_1$ (left) and $X_2$ (right).
- **Step 3:** With centres $X_1$ and $X_2$ and radius $3\text{ cm}$, draw arcs above $l$ intersecting at $S$.
- **Step 4:** Draw ray $XS$ and extend it slightly. With centre $X$ and radius $3\text{ cm}$, cut this ray at $U$. Now $XU \perp l$ and $XU = 3\text{ cm}$.
- **Step 5:** With centre $Y$ and radius $2\text{ cm}$, cut $l$ on both sides of $Y$ at $Y_1$ (left) and $Y_2$ (right).
- **Step 6:** With centres $Y_1$ and $Y_2$ and radius $3\text{ cm}$, draw arcs above $l$ intersecting at $T$.
- **Step 7:** Draw ray $YT$ and extend it slightly. With centre $Y$ and radius $3\text{ cm}$, cut this ray at $V$. Now $YV \perp l$ and $YV = 3\text{ cm}$.
- **Step 8:** Join $U$ and $V$ and extend the line in both directions. Call this line $m$.

> **Figure 3.5** – Points $X$ and $Y$ on line $l$ ($XY = 5\text{ cm}$); $3\text{ cm}$ perpendiculars $XU$ and $YV$ erected at $X$ and $Y$ ($S$ and $T$ are arc intersections); line $m = UV \parallel l$ at distance $3\text{ cm}$.

**Why Does It Work?**

Since $XU \perp l$ and $YV \perp l$, both form $90^\circ$ angles with $l$. These equal corresponding angles mean $XU \parallel YV$. Join $U$ and $Y$. In $\triangle XUY$ and $\triangle VYU$:
- $XU = YV = 3\text{ cm}$
- $UY = UY$ (common)
- $\angle XUY = \angle VYU$ (alternate interior angles, since $XU \parallel YV$)

By **SAS**, $\triangle XUY \cong \triangle VYU$, so $\angle XYU = \angle VUY$. These are alternate interior angles for transversal $UY$, hence **$UV \parallel XY$**, meaning $m \parallel l$. Every perpendicular between $l$ and $m$ measures $3\text{ cm}$.

**Check:** Pick a third point $Z$ on $l$ between $X$ and $Y$, use a set square to measure straight up from $Z$ to $m$: $ZW = 3\text{ cm}$ ✅. Check at multiple spots!

---

## Part E: Finding the Centre of a Circle via Perpendicular Bisector (Preview)

*This section is a preview for later: it returns in the Circles chapter ([circles.md](../circles/circles.md)).*

**Question:** Construct a circle passing through two points $A$ and $B$ ($AB = 5\text{ cm}$) with radius $6.5\text{ cm}$.

Idea: The centre $O$ of a circle must be **equidistant** from $A$ and $B$ (both distances equal the radius). Every point equidistant from $A$ and $B$ lies on the perpendicular bisector of $AB$ (Topic 1). Therefore, **the centre must lie somewhere on the perpendicular bisector of $AB$**.

**Given:** Segment $AB = 5\text{ cm}$.

**Steps of Construction**

- **Step 1:** Draw segment $AB = 5\text{ cm}$.
- **Step 2:** With centre $A$ and radius $4\text{ cm}$ (greater than half of $5\text{ cm}$, which is $2.5\text{ cm}$), draw arcs above and below $AB$.
- **Step 3:** With centre $B$ and the **same radius $4\text{ cm}$**, draw arcs above and below $AB$ cutting the first arcs at $M$ (above) and $N$ (below).
- **Step 4:** Join $M$ and $N$, extending the line well above $M$. Let it cut $AB$ at $D$.
- **Step 5:** With centre $A$ and radius $6.5\text{ cm}$, draw an arc cutting line $MN$ above $AB$ at $O$.
- **Step 6:** With centre $O$ and radius $OA$ ($6.5\text{ cm}$), draw a circle.

> **Figure 3.6** – Segment $AB = 5\text{ cm}$; perpendicular bisector $MN$ (from arcs crossing at $M$ and $N$) cuts $AB$ at $D$; point $O$ lies on $MN$ above $AB$ with $OA = OB = 6.5\text{ cm}$; circle centred at $O$ of radius $6.5\text{ cm}$ passes through both $A$ and $B$.

**Why Does It Work?** Since $O$ lies on the perpendicular bisector of $AB$, $OA = OB = 6.5\text{ cm}$. Both $A$ and $B$ are $6.5\text{ cm}$ from $O$, so both lie on the circle!

**Numerical check:** $AD = DB = 2.5\text{ cm}$ and $AO = 6.5\text{ cm}$, so $OD^2 = 6.5^2 - 2.5^2 = 42.25 - 6.25 = 36$, giving $OD = 6\text{ cm}$. Since $OD \perp AB$, $OB^2 = 2.5^2 + 6^2 = 6.25 + 36 = 42.25$, so $OB = 6.5\text{ cm}$ ✅.

**Check:** Measure $OB$ with a ruler: $6.5\text{ cm}$. Notice that the circle passes cleanly through both $A$ and $B$ ✅.

**Keep in mind:** In Step 5, we could have chosen **any** point along $MN$ (above or below $D$) as $O$, each producing a different circle through $A$ and $B$. Thus **infinitely many circles** pass through two points $A$ and $B$. Adding a third non-collinear point $C$ locks in just one unique circle — as we will prove in Circles!

---

## Part F: Painting the Parking Bays (Story Solved)

Now back to the underground car park. On paper, our scale is **$1\text{ cm} = 1\text{ metre}$**, so a $2.5\text{ m}$ bay width becomes **$2.5\text{ cm}$**, and a $5\text{ m}$ bay depth becomes **$5\text{ cm}$**.

**Question:** Along lane line $l$, lay out two side-by-side parking bays, each $2.5\text{ cm}$ ($2.5\text{ m}$) wide and $5\text{ cm}$ ($5\text{ m}$) deep, with side dividers perpendicular to $l$ and parallel to one another.

**Given:** Lane line $l$ (the painted driving lane).

**Steps of Construction**

- **Step 1:** Mark point $A$ on $l$. Along $l$ in one direction, mark $B$ at $2.5\text{ cm}$ from $A$, and $C$ at $2.5\text{ cm}$ from $B$. Now $AB = BC = 2.5\text{ cm}$.
- **Step 2:** With centre $A$ and radius $1\text{ cm}$, cut $l$ on both sides of $A$ at $A_1$ (left) and $A_2$ (right).
- **Step 3:** With centres $A_1$ and $A_2$ and radius $1.5\text{ cm}$ (more than half of $A_1A_2$, which is $1\text{ cm}$), draw arcs above $l$ meeting at $P$.
- **Step 4:** Draw ray $AP$. With centre $A$ and radius $5\text{ cm}$, cut ray $AP$ at $D$. Now $AD \perp l$ and $AD = 5\text{ cm}$.
- **Step 5:** With centre $B$ and radius $1\text{ cm}$, cut $l$ on both sides of $B$ at $B_1$ and $B_2$.
- **Step 6:** With centres $B_1$ and $B_2$ and radius $1.5\text{ cm}$, draw arcs above $l$ meeting at $Q$.
- **Step 7:** Draw ray $BQ$. With centre $B$ and radius $5\text{ cm}$, cut ray $BQ$ at $E$. Now $BE \perp l$ and $BE = 5\text{ cm}$.
- **Step 8:** With centre $C$ and radius $1\text{ cm}$, cut $l$ on both sides of $C$ at $C_1$ and $C_2$.
- **Step 9:** With centres $C_1$ and $C_2$ and radius $1.5\text{ cm}$, draw arcs above $l$ meeting at $R$.
- **Step 10:** Draw ray $CR$. With centre $C$ and radius $5\text{ cm}$, cut ray $CR$ at $F$. Now $CF \perp l$ and $CF = 5\text{ cm}$.
- **Step 11:** Join $D, E, F$ along the back if a back boundary line is needed.

> **Figure 3.7** – Points $A, B, C$ along lane line $l$ ($AB = BC = 2.5\text{ cm}$); $5\text{ cm}$ perpendiculars $AD, BE, CF$ are all parallel, forming two rectangular parking bays $ABED$ and $BCFE$, each $2.5\text{ cm}$ wide by $5\text{ cm}$ deep.

**Why Does It Work?**

Each perpendicular uses Part A's method (the perpendicular bisector of equal flanking segments passes right through $A, B, C$), so $AD \perp l$, $BE \perp l$, and $CF \perp l$. All three form equal $90^\circ$ corresponding angles with $l$, so all three dividers are **parallel**. With $AD = BE = CF = 5\text{ cm}$ and $AB = BC = 2.5\text{ cm}$, each bay is an exact $2.5\text{ cm} \times 5\text{ cm}$ rectangle.

**Check:** Measure the back widths: $DE = 2.5\text{ cm}$ and $EF = 2.5\text{ cm}$ (distance between parallel lines stays constant everywhere). Check the $90^\circ$ angles at $A, B, C$ with a set square ✅.

**On the real concrete floor:** Dr. Bennett repeated the exact same steps using the knotted cord — knots at $1\text{ m}$, $1.5\text{ m}$, $2.5\text{ m}$, and $5\text{ m}$ — pulling the string taut on every swing so the radius never sagged. Liam swung the $1\text{ m}$ marks at $A$, then the $1.5\text{ m}$ arcs to locate $P$, and finally marked $D$ at $5\text{ m}$, repeating down the row.

After finishing the first two bays, Liam noticed, "Dr. Bennett, the divider at $B$ is shared by both bays!"

Dr. Bennett nodded. "That is why **three** divider lines create **two** bays. Now imagine what would have happened if we had eyeballed them!"

"Crooked cars everywhere!" Liam laughed — and he never suggested guessing a straight line again.

---

## Common Pitfalls to Avoid

1. **Mistake 1: Setting the compass radius smaller than half of $AB$.**
   If $AB = 6\text{ cm}$ and you open the compass to only $2\text{ cm}$, the two arcs reach $2 + 2 = 4\text{ cm} < 6\text{ cm}$. They will never meet, leaving you without $Q$ or $M$. Always choose a radius strictly **greater than half of $AB$** (e.g., $4\text{ cm}$ when half is $3\text{ cm}$).

2. **Mistake 2: Using different radii for the two arcs.**
   If you draw a $4\text{ cm}$ arc from $A$ and a $3\text{ cm}$ arc from $B$, they will meet at some point $Q$ with $AQ = 4\text{ cm}$ and $BQ = 3\text{ cm}$. Then $Q$ is **not equidistant** from $A$ and $B$, so $PQ$ tilts away from $90^\circ$. Never adjust the compass between the two arcs.

3. **Mistake 3: Eyeballing a parallel line.**
   A line drawn by eye may look parallel at first, only to drift closer or farther down the page. Two lines are parallel only if the perpendicular distance between them is identical everywhere. Always use a proper construction and check the spacing at two or three points.

4. **Mistake 4: Measuring distance along a slanted line.**
   The distance between two parallel lines is always measured along a **perpendicular**, never diagonally. Between lines $3\text{ cm}$ apart, a slanted ruler measurement could easily read $4\text{ cm}$ or more. Always measure at $90^\circ$.

5. **Mistake 5: Confusing a perpendicular bisector with an angle bisector.**
   - **Perpendicular bisector:** cuts a **line segment** (like $AB$) at its **midpoint** at $90^\circ$, splitting a length into two equal parts.
   - **Angle bisector:** splits an **angle** into two equal angles (like $60^\circ$ into $30^\circ$ and $30^\circ$).
   One divides a segment; the other divides an angle. They are distinct constructions.

---

## Quick Recap

- **Perpendicular at point $P$ on line $l$:** mark equal points $A$ and $B$ on either side of $P$, then construct the perpendicular bisector of $AB$ through $P$.
- **Perpendicular from external point $P$ to line $l$:** swing an arc from $P$ cutting $l$ at $A$ and $B$, then draw equal-radius arcs (greater than $\frac{1}{2}AB$) from $A$ and $B$ meeting at $Q$ on the opposite side of $l$; join $PQ$. Works because $PA = PB$ and $QA = QB$ (SSS + SAS).
- **Parallel line (copying an angle):** draw a transversal through $P$ and $l$, and copy the angle at $l$ into the corresponding position at $P$. Equal corresponding (or alternate) angles guarantee parallel lines.
- **Rhombus method:** using one fixed radius, mark $PA = AB = BC = CP$ to form a rhombus; then $PC \parallel l$.
- **Distance between parallel lines:** the constant perpendicular distance between them. To build a parallel line at distance $d$, erect two perpendiculars of length $d$ on $l$ and join their endpoints.
- **Centre of a circle:** the centre of any circle through $A$ and $B$ lies on the perpendicular bisector of $AB$.
- **Parking bays:** equal perpendiculars at $90^\circ$ to the lane line are automatically parallel, scaled at $1\text{ cm} = 1\text{ m}$.
- Avoid pitfalls: never use a radius under half, keep radii equal, never eyeball parallels, measure distance perpendicularly, and distinguish segment bisectors from angle bisectors.

---

## Practice Questions

1. A point $P$ lies $3.5\text{ cm}$ above a line $l$. Describe how you would draw a perpendicular from $P$ to $l$ using a compass. What length will the perpendicular be? Why should the first arc have a radius greater than $3.5\text{ cm}$?

2. Segment $AB = 6\text{ cm}$. A student draws arcs of radius $2\text{ cm}$ from $A$ and from $B$ to find the perpendicular bisector. Why does this fail? Give a radius that works.

3. How many lines can be drawn parallel to a line $l$ at a distance of $4.5\text{ cm}$ from it? Explain.

4. In the compass-and-ruler method for a parallel line through $P$ (Figure 3.3), suppose $\angle CAB$ is measured as $65^\circ$. What is $\angle DPE$? Name the pair of angles and the rule that makes $PE \parallel l$.

5. In the rhombus method, $P$ is $3\text{ cm}$ above $l$ and the compass radius is $5\text{ cm}$. Find the distance from the foot of the perpendicular from $P$ to the point $A$ where the first arc cuts $l$. What is the distance between lines $PC$ and $l$?

6. A circle passes through two points $A$ and $B$ with $AB = 10\text{ cm}$ and has radius $13\text{ cm}$. How far is its centre from the midpoint of $AB$, and on which line does the centre lie?

7. A bay drawn at the scale $1\text{ cm} = 2\text{ metres}$ is $2.5\text{ cm}$ wide on paper. What is its real width? If the real bay is $5\text{ metres}$ wide, how wide would it be on a drawing with the scale $1\text{ cm} = 2\text{ metres}$?

8. State True or False:
   (a) The perpendicular bisector of $AB$ passes through the midpoint of $AB$ and is perpendicular to $AB$.
   (b) If the compass radius is less than half of $AB$, the two arcs can still meet.
   (c) The distance between two parallel lines is measured along any slanting line joining them.
   (d) Every point on the perpendicular bisector of $AB$ is equally far from $A$ and from $B$.

### Answers

1. Swing an arc from $P$ with a radius greater than $3.5\text{ cm}$ (e.g., $5\text{ cm}$) to cut $l$ at $A$ and $B$. With equal radii greater than $\frac{1}{2}AB$, draw arcs from $A$ and $B$ meeting at $Q$ on the opposite side of $l$, and join $PQ$. The perpendicular length is **$3.5\text{ cm}$** (the height of $P$ above $l$). If the first arc's radius were under $3.5\text{ cm}$, it would never reach line $l$ to give points $A$ and $B$.

2. The two arcs cover only $2 + 2 = 4\text{ cm}$, whereas $A$ and $B$ are $6\text{ cm}$ apart, so the arcs never intersect. Any radius strictly greater than $3\text{ cm}$ works — for example, **$4\text{ cm}$** ($4 + 4 = 8 > 6$).

3. **Two lines.** One lies $4.5\text{ cm}$ on one side of $l$, and the other lies $4.5\text{ cm}$ on the opposite side of $l$. Both are parallel to $l$.

4. $\angle DPE = \mathbf{65^\circ}$. $\angle CAB$ and $\angle DPE$ are **corresponding angles**, and equal corresponding angles mean $PE \parallel l$ (guaranteed by $\triangle CAB \cong \triangle DPE$ via SSS).

5. The distance from the foot of the perpendicular to $A$ is one leg of a right-angled triangle with hypotenuse $PA = 5\text{ cm}$ and height $3\text{ cm}$, so the other leg is $\sqrt{5^2 - 3^2} = \mathbf{4\text{ cm}}$ ($3^2 + 4^2 = 5^2$). The distance between parallel lines $PC$ and $l$ is **$3\text{ cm}$** (the perpendicular height of $P$ above $l$).

6. The centre lies on the **perpendicular bisector of $AB$**. If its distance from the midpoint of $AB$ is $x$, then $5^2 + x^2 = 13^2 \implies x^2 = 169 - 25 = 144 \implies x = \mathbf{12\text{ cm}}$. (Check: $25 + 144 = 169$ ✅.)

7. With $1\text{ cm} = 2\text{ m}$, a $2.5\text{ cm}$ drawing width represents $2.5 \times 2 = \mathbf{5\text{ metres}}$. Conversely, a $5\text{ m}$ real bay at $1\text{ cm} = 2\text{ m}$ measures $5 \div 2 = \mathbf{2.5\text{ cm}}$ on paper.

8. (a) **True** ✅. That is the definition of a perpendicular bisector.
   (b) **False** ❌. Their combined reach is less than $AB$, so they cannot cross.
   (c) **False** ❌. Distance between parallel lines is always measured perpendicularly, never along a slant.
   (d) **True** ✅. Every point on the perpendicular bisector of $AB$ is equidistant from $A$ and $B$.

---

You now have full command over constructing perpendicular and parallel lines with a compass — and the geometric proofs behind every step. Whenever you need true right angles or parallel boundaries, trust your compass rather than your eye!

**What comes next?** So far we have constructed individual segments, angles, and lines. In Topic 4, we combine everything to construct our first complete **triangles** from given measurements such as three sides. Can any three lengths form a triangle — and is the result always unique?
