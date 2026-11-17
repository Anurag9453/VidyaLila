# Chapter: Trigonometry (Part 7)

> **Class:** 9 | **Subject:** Mathematics
> **Continues from [trigonometry-part6.md](trigonometry-part6.md).** (The chapter starts in [trigonometry.md](trigonometry.md).)
> **Topics covered in this file:**
> 7. Heights and Distances (Applications)

---

# Topic 7: Heights and Distances (Applications)

In Topic 6, we unlocked complementary-angle pairs and the three fundamental identities, completing our trigonometric toolkit: all six ratios ($\sin, \cos, \tan$ and their reciprocals), exact values for $0^\circ, 30^\circ, 45^\circ, 60^\circ, 90^\circ$, and finding missing sides from one ratio or angle. Now comes the payoff: **how do we use this toolkit in the real world?**

In this final topic, we will do something remarkable: **without climbing a single ladder or stretching a tape up a wall, we will calculate the exact height of tall towers, trees, and cliffs using just one measured angle and one ground distance.** Since this is the last topic of the chapter, a complete **Chapter Wrap-up** with all reference tables sits at the end.

Prior skills used here: the Pythagoras theorem ([Pythagoras Theorem](../pythagoras-theorem/pythagoras-theorem.md)) and alternate interior angles between parallel lines ([Lines and Angles Part 3](../lines-and-angles/lines-and-angles-part3.md)).

**Throughout this topic, take $\sqrt{2} \approx 1.414$ and $\sqrt{3} \approx 1.732$.**

---

## The Clock Tower and the Homemade Clinometer

On a school field trip, Dr. Bennett brought his class to see an old stone clock tower in the town square. Looking way up at the spire, Elena asked, "Dr. Bennett, how tall do you think that tower is?"

Dr. Bennett smiled. "Should we climb up with a measuring tape?" Elena laughed, "No way—the stairs are locked, and that roof is way too high!"

"Then let's build a **clinometer**," Dr. Bennett said. He took a plastic protractor, taped a straight drinking straw along its flat edge, and hung a weighted string from the centre mark with a small pebble tied at the bottom. Gravity pulls the pebble straight down so the string always points vertically.

Next, they walked **$30\text{ m}$** back from the base of the tower along the flat square (measuring with a tape). Elena peered through the straw until she lined up the very tip of the spire. The string swung **$30^\circ$** away from the $90^\circ$ mark—meaning her line of sight tilted **$30^\circ$ above horizontal**.

With one angle ($30^\circ$) and one ground distance ($30\text{ m}$), can Elena calculate the tower's height? Easily—using $\tan$! At the end of this topic, we will solve Elena's exact measurement. First, let us master the terms and diagrams.

---

## Key Vocabulary

| Term | Meaning | Example |
|---|---|---|
| **Line of sight** | The straight imaginary line from the observer's eye to the object being viewed | From Elena's eye straight up to the tower spire |
| **Horizontal line** | A straight level line at eye level, parallel to flat ground | Looking straight ahead from Elena's eye |
| **Angle of elevation** | The angle between the horizontal line and the line of sight when looking **up** | The $30^\circ$ upward tilt toward the spire |
| **Angle of depression** | The angle between the horizontal line and the line of sight when looking **down** | Looking down from a balcony to a car on the street |
| **Clinometer** | A simple angle-measuring instrument used to measure angles of elevation | Protractor $+$ straw $+$ weighted string |

---

## Part A: Angles of Elevation and Depression (With Diagrams)

### Angle of Elevation

Suppose you stand on flat ground and look **up** at the top of a tower or a flying kite. Draw a level **horizontal line** straight out from your eye, and draw your **line of sight** up to the top. The angle between those two lines is the **angle of elevation**.

```
                        * top
                      /|
        line of sight/  |
                    /   |
                  /     |  height
                /       |
              /  θ      |
   eye   . - - - - - - -+   <- horizontal line
```

Here $\theta$ is the angle of elevation. Always remember: it is measured **upward from the horizontal**, never from the vertical!

### Angle of Depression

Now suppose you stand on the roof of a tall building looking **down** at a parked car below. Draw a level **horizontal line** straight out from your eye. Because you are looking downward, your **line of sight** dips *below* that horizontal line. The angle between the horizontal line and your downward line of sight is the **angle of depression**.

```
   eye  .- - - - - - - - - - - - - - - -  <- horizontal line
        |\  
        | \ θ
        |  \  line of sight
  height|   \
        |    \
        |     \
        +------* car
        (base)
```

Again, the angle is measured **from the horizontal**, this time downward.

### A Crucial Connection: Depression from Above Equals Elevation from Below

Suppose observer $A$ at the top of a building sees a car $B$ at an angle of depression $\theta$. What is the angle of elevation of $A$ as seen from the car at $B$?

```
  A .- - - - - - - - - - - -   <- horizontal at A
    |\ 
    | \ θ   (depression)
    |  \
    |   \
    |    \
    |     \ 
    +------B- - - - - - - - -   <- horizontal (ground at B)
              θ (elevation)
```

Because the horizontal line at $A$ and the flat ground at $B$ are **parallel**, and the line of sight $AB$ cuts across both as a transversal, they form a pair of **alternate interior angles** ([Lines and Angles Part 3](../lines-and-angles/lines-and-angles-part3.md)). Therefore:

> **Angle of depression from above $=$ Angle of elevation from below.**

This fact makes depression problems super easy: once you know the angle of depression from the top is $\theta$, you can immediately label $\theta$ inside the bottom corner of the right triangle!

---

## Part B: Step-by-Step Method (For Every Problem)

1. **Draw a clear diagram.** Sketch a neat vertical segment (height), a horizontal segment (ground distance), and the slanted line of sight.
2. **Identify the right triangle.** The vertical height and flat ground meet at $90^\circ$.
3. **Mark the given angle and label the sides.** Place the angle at the horizontal corner. Opposite the angle is height, adjacent along the ground is distance, and the line of sight (or ladder/kite string) is the hypotenuse.
4. **Choose the right trigonometric ratio:**
   - Connecting **height** and **horizontal distance**: use **$\tan$** ($\frac{\text{opp}}{\text{adj}}$).
   - Connecting **height** and **line of sight / ladder / kite string**: use **$\sin$** ($\frac{\text{opp}}{\text{hyp}}$).
   - Connecting **horizontal distance** and **line of sight / ladder / string**: use **$\cos$** ($\frac{\text{adj}}{\text{hyp}}$).
5. **Solve** in exact surd form first (keeping $\sqrt{3}$, etc.), then convert to a decimal.
6. **Include units** and run a **sense-check**: at $45^\circ$, height and ground distance must be equal; the hypotenuse must always be the longest side.

Handy values: $\tan 30^\circ = \frac{1}{\sqrt{3}}$, $\tan 45^\circ = 1$, $\tan 60^\circ = \sqrt{3}$, $\sin 30^\circ = \frac{1}{2}$, $\sin 60^\circ = \frac{\sqrt{3}}{2}$, $\cos 30^\circ = \frac{\sqrt{3}}{2}$, $\cos 60^\circ = \frac{1}{2}$.

---

## Part C: Worked Examples—Angle of Elevation

### Example 1: Height of the Clock Tower (Our Story)

Ground distance $= 30\text{ m}$, angle of elevation $= 30^\circ$, height above eye level $= h$.

```
              * top
            /|
          /  |
        /    |  h
      /      |
    / 30°    |
  E - - - - -+
      30 m   (base)
```

$$\tan 30^\circ = \frac{h}{30}$$

$$h = 30 \times \tan 30^\circ = 30 \times \frac{1}{\sqrt{3}} = \frac{30}{\sqrt{3}} = \frac{30\sqrt{3}}{3} = \mathbf{10\sqrt{3}\text{ m}} \approx 10 \times 1.732 = \mathbf{17.32\text{ m}}$$

**Check:** $\frac{17.32}{30} \approx 0.5773 = \frac{1}{\sqrt{3}} = \tan 30^\circ$ ✅.

### Example 2: Height of a Radio Tower

Standing $20\text{ m}$ from the base of a radio tower, the angle of elevation of its top is $60^\circ$. Find the height of the tower.

$$\tan 60^\circ = \frac{h}{20}$$

$$h = 20 \times \sqrt{3} = \mathbf{20\sqrt{3}\text{ m}} \approx 20 \times 1.732 = \mathbf{34.64\text{ m}}$$

**Check:** $\frac{34.64}{20} = 1.732 = \sqrt{3}$ ✅.

*Sense-check:* $60^\circ > 45^\circ$, so the tower should be taller than the $20\text{ m}$ ground distance—and indeed $34.64 > 20$ ✅.

### Example 3: A Ladder Against a Wall

A $10\text{ m}$ ladder leans against a vertical wall, making an angle of $60^\circ$ with level ground. How high up the wall does it reach, and how far is its foot from the wall?

The ladder is the hypotenuse ($10\text{ m}$).
- **Height ($h$):** $\sin 60^\circ = \frac{h}{10} \implies h = 10 \times \frac{\sqrt{3}}{2} = \mathbf{5\sqrt{3}\text{ m}} \approx 5 \times 1.732 = \mathbf{8.66\text{ m}}$
- **Distance from wall ($d$):** $\cos 60^\circ = \frac{d}{10} \implies d = 10 \times \frac{1}{2} = \mathbf{5\text{ m}}$

**Check (Pythagoras):** $h^2 + d^2 = (5\sqrt{3})^2 + 5^2 = 75 + 25 = 100 = 10^2$ ✅. (Decimal check: $8.66^2 + 5^2 \approx 75 + 25 = 100$ ✅.)

### Example 4: Height from a Stretched Cable (or Kite String)

A $100\text{ m}$ cable (or taut kite string) stretches from the top of a tall mast (or kite) to a peg on flat ground, making an angle of $30^\circ$ with the ground. Find the vertical height.

$$\sin 30^\circ = \frac{h}{100} \implies h = 100 \times \frac{1}{2} = \mathbf{50\text{ m}}$$

**Check:** The taut cable is the hypotenuse ($100\text{ m}$), and in a $30^\circ\text{-}60^\circ\text{-}90^\circ$ triangle the side opposite $30^\circ$ is always half the hypotenuse: $\frac{100}{2} = 50$ ✅.

### Example 5: Shadow of a Flagpole

When the sun's angle of elevation is $45^\circ$, how long is the shadow cast by a $7\text{ m}$ vertical pole?

The pole is the vertical height ($7\text{ m}$) and the shadow lies flat along the ground.

$$\tan 45^\circ = \frac{7}{\text{shadow}}, \quad \text{and } \tan 45^\circ = 1 \implies \text{shadow} = \frac{7}{1} = \mathbf{7\text{ m}}$$

**Check:** At $45^\circ$, the height and shadow are always **equal** because both acute angles of the right triangle are $45^\circ$ ✅.

### Example 6: A Tree Broken in a Storm

A tree snaps partway up during a storm without detaching completely. Its upper portion bends down so the treetop touches flat ground $6\text{ m}$ from the trunk, making a $60^\circ$ angle with the ground. What was the total height of the tree before it broke?

Let the upright lower trunk be $h$ (vertical) and the bent upper portion be $l$ (hypotenuse).
- **Upright part ($h$):** $\tan 60^\circ = \frac{h}{6} \implies h = 6\sqrt{3} \approx 6 \times 1.732 = 10.39\text{ m}$
- **Bent part ($l$):** $\cos 60^\circ = \frac{6}{l} \implies l = \frac{6}{1/2} = 12\text{ m}$

$$\text{Original height} = h + l = 6\sqrt{3} + 12 \approx 10.39 + 12 = \mathbf{22.39\text{ m}}$$

**Check (Pythagoras):** $h^2 + 6^2 = (6\sqrt{3})^2 + 36 = 108 + 36 = 144 = 12^2$ ✅.

---

## Part D: Worked Examples—Angle of Depression

### Example 7: A Car Observed from a Building

From the roof of a $50\text{ m}$ tall building, an observer spots a car at an angle of depression of $45^\circ$. A few moments later, the car drives farther away and its angle of depression drops to $30^\circ$. How far from the base of the building was the car at each moment?

Remember: angle of depression from the roof equals angle of elevation from the car (alternate interior angles).
- **First position ($45^\circ$):**
  $$\tan 45^\circ = \frac{50}{d_1} \implies d_1 = \frac{50}{1} = \mathbf{50\text{ m}}$$
- **Second position ($30^\circ$):**
  $$\tan 30^\circ = \frac{50}{d_2} \implies d_2 = \frac{50}{1/\sqrt{3}} = \mathbf{50\sqrt{3}\text{ m}} \approx 50 \times 1.732 = \mathbf{86.6\text{ m}}$$

**Check:** $\frac{50}{86.6} \approx 0.5774 = \frac{1}{\sqrt{3}}$ ✅.

*Sense-check:* As the car drove farther away, the angle of depression grew smaller, and $86.6 > 50$ ✅. The car moved $86.6 - 50 = 36.6\text{ m}$ farther away.

### Example 8: Lighthouse and Boat

A lighthouse sits atop a coastal cliff $60\text{ m}$ above sea level. From its lantern room, the angle of depression to a sailboat at sea is $60^\circ$. How far is the boat from the base of the cliff?

$$\tan 60^\circ = \frac{60}{d}$$

$$d = \frac{60}{\sqrt{3}} = \frac{60\sqrt{3}}{3} = \mathbf{20\sqrt{3}\text{ m}} \approx 20 \times 1.732 = \mathbf{34.64\text{ m}}$$

**Check:** $\frac{60}{34.64} \approx 1.732 = \sqrt{3}$ ✅.

*(Bonus: If asked for the direct line-of-sight distance $L$ from the lantern to the boat, $\sin 60^\circ = \frac{60}{L} \implies L = \frac{60}{\sqrt{3}/2} = \frac{120}{\sqrt{3}} = 40\sqrt{3} \approx 69.28\text{ m}$. Check by Pythagoras: $60^2 + (20\sqrt{3})^2 = 3600 + 1200 = 4800 = (40\sqrt{3})^2$ ✅.)*

---

## Part E: Two-Angle Problems (Slightly Trickier, Extra)

### Example 9: Walking Closer Increases the Angle

Walking straight toward the base of a tower, a surveyor measures the angle of elevation of its top as $30^\circ$ at point $P$. After walking $20\text{ m}$ closer to point $Q$, the angle of elevation increases to $60^\circ$. Find the height of the tower and the original distance from $P$ to the base.

```
      * top
      |\
      | \
      |  \ 
    h |   \ 
      |    \ 
      |  60°\ 
      |      \      30°
      B------Q---------P
         x    20 m
```

Let $x\text{ m}$ be the distance from the base $B$ to the closer point $Q$. Then the original point $P$ is $(x + 20)\text{ m}$ from $B$. Let $h$ be the tower's height.
- From $Q$: $\tan 60^\circ = \frac{h}{x} \implies h = x\sqrt{3}$ $\quad\text{...(1)}$
- From $P$: $\tan 30^\circ = \frac{h}{x + 20} \implies h = \frac{x + 20}{\sqrt{3}}$ $\quad\text{...(2)}$

Set equations $(1)$ and $(2)$ equal:
$$x\sqrt{3} = \frac{x + 20}{\sqrt{3}}$$

Multiply both sides by $\sqrt{3}$:
$$3x = x + 20 \implies 2x = 20 \implies x = 10$$

Therefore:
- **Height:** $h = 10\sqrt{3} \approx 10 \times 1.732 = \mathbf{17.32\text{ m}}$
- **Original distance from $P$:** $x + 20 = 10 + 20 = \mathbf{30\text{ m}}$

**Check:**
- From $P$: $\frac{h}{30} = \frac{17.32}{30} \approx 0.5773 = \tan 30^\circ$ ✅
- From $Q$: $\frac{h}{10} = \frac{17.32}{10} = 1.732 = \tan 60^\circ$ ✅

Notice those exact numbers—$30\text{ m}$ and $17.32\text{ m}$—match Elena's clock tower from Example 1! Walking $20\text{ m}$ closer to that same tower changes the elevation from $30^\circ$ to $60^\circ$, and both triangles give the exact same height. Everything fits together seamlessly.

---

## Part F: Solving Our Opening Story

Elena measured a ground distance of $30\text{ m}$ and an angle of elevation of $30^\circ$:

$$h = 30 \tan 30^\circ = 10\sqrt{3} \approx \mathbf{17.32\text{ m}} \quad (\text{Example 1})$$

**One real-world adjustment:** Elena held the clinometer up to **eye level**, not flat on the ground! If her eyes are **$1.5\text{ m}$** above the ground, then $17.32\text{ m}$ is only the height *above her eye level*. Adding her eye height gives the true height of the clock tower:

$$\text{Total height} = 17.32 + 1.5 = \mathbf{18.82\text{ m}} \quad (\text{approx.})$$

```
         * top
       / |
     /   |  17.32 m (above eye level)
   /30°  |
  . - - -+ - - eye level
  |      |  1.5 m
  +------+  ground
   30 m
```

Dr. Bennett grinned. "Not bad for a straw, a string, and a plastic protractor! So Elena, is the answer $17.32\text{ m}$ or $18.82\text{ m}$?" Elena laughed, "Both, Dr. Bennett—$17.32\text{ m}$ above my eyes, plus $1.5\text{ m}$ below them for the full tower!"

---

## Common Pitfalls to Avoid

1. **Mistake 1: Skipping the diagram.**
   Without a sketch, it is easy to confuse which side is opposite and which is adjacent. Always draw the right triangle first.

2. **Mistake 2: Measuring depression from the vertical instead of the horizontal.**
   Angles of depression and elevation are always measured from a **horizontal** line. Taking a $30^\circ$ depression from the vertical wall puts $60^\circ$ inside the bottom corner instead of $30^\circ$, turning $50\sqrt{3} \approx 86.6\text{ m}$ in Example 7 into $\frac{50}{\sqrt{3}} \approx 28.87\text{ m}$—completely wrong!

3. **Mistake 3: Picking $\sin$ or $\cos$ instead of $\tan$ when given height and ground distance.**
   Height and ground distance are the two legs, so they are linked by **$\tan$**. Writing $\sin 30^\circ = \frac{h}{30}$ in Example 1 gives $h = 15\text{ m}$—wrong, because $30\text{ m}$ is the horizontal ground distance, not the hypotenuse.

4. **Mistake 4: Forgetting to add the observer's eye height.**
   Whenever a problem states the observer's eye level (such as $1.5\text{ m}$), add it to the triangle's vertical leg at the end ($17.32 + 1.5 = 18.82\text{ m}$).

5. **Mistake 5: Leaving a real-world measurement only in surd form.**
   Saying "the tower is $10\sqrt{3}\text{ m}$ tall" is mathematically exact, yet in practical measurement problems you should give both the exact surd form and the decimal approximation ($17.32\text{ m}$) so you can sense-check the size.

6. **Mistake 6: Mixing units.**
   If a ground distance is in metres ($30\text{ m}$) and eye height is in centimetres ($150\text{ cm}$), convert to matching units ($150\text{ cm} = 1.5\text{ m}$) before adding or dividing.

---

## Quick Recap

- **Line of sight:** straight line from the observer's eye to the target. **Horizontal line:** level line at eye height.
- **Angle of elevation:** angle above the horizontal when looking up. **Angle of depression:** angle below the horizontal when looking down.
- **Depression from above $=$ elevation from below** (alternate interior angles between parallel horizontal lines).
- **Problem-solving checklist:** draw diagram $\to$ locate right triangle $\to$ label sides $\to$ pick $\tan$ (height & base), $\sin$ (height & hypotenuse), or $\cos$ (base & hypotenuse) $\to$ solve $\to$ include units and sense-check.
- Add observer eye height when given; report both exact surds and decimals.
- In two-angle problems, express the shared height in two equations and set them equal.

---

## Practice Questions

1. A tower casts a shadow of $15\text{ m}$ when the sun's angle of elevation is $60^\circ$. Find the height of the tower (use $\sqrt{3} \approx 1.732$).

2. An $8\text{ m}$ ladder makes an angle of $30^\circ$ with the ground. How high up the wall does it reach, and how far is its foot from the wall?

3. Elena stands $40\text{ m}$ from a building and measures the angle of elevation of its roof as $45^\circ$. Her eyes are $1.6\text{ m}$ above the ground. Find the height of the building.

4. From the top of a $100\text{ m}$ high cliff, the angle of depression of a boat is $30^\circ$. How far is the boat from the foot of the cliff? (Use $\sqrt{3} \approx 1.732$.)

5. A cable is stretched from the top of a pole to the ground, making an angle of $60^\circ$ with the ground. If the cable is $24\text{ m}$ long, find the height of the pole and the distance from the cable's anchor to the base of the pole.

6. A tree breaks in a storm and its top touches the ground $5\text{ m}$ from the foot of the tree, making an angle of $30^\circ$ with the ground. Find the total height of the tree before it broke (use $\sqrt{3} \approx 1.732$).

7. State whether each statement is true or false, giving a reason:
   (a) The angle of depression of a car from a building's roof equals the angle of elevation of the building's roof from the car.
   (b) The angle of elevation is measured from the vertical line.
   (c) As you walk closer to a tower, the angle of elevation of its top increases.

8. From a point $P$ on the ground, the angle of elevation of the top of a tower is $30^\circ$. After walking $40\text{ m}$ toward the tower, the angle becomes $60^\circ$. Find the height of the tower and the original distance of $P$ from its base. *(Extra)*

9. Dr. Bennett stands $12\text{ m}$ from a flagpole and measures the angle of elevation of its top as $60^\circ$. His eye level is $1.5\text{ m}$ above the ground. Find the height of the flagpole (use $\sqrt{3} \approx 1.732$).

10. A student solved this problem: "From the top of a $50\text{ m}$ building, the angle of depression of a car is $30^\circ$. Find the car's distance $d$ from the base." She wrote $\tan 30^\circ = \frac{d}{50}$ and got $d = \frac{50}{\sqrt{3}}$. What mistake did she make, and what is the correct answer?

### Answers

1. $\tan 60^\circ = \frac{h}{15} \implies h = 15\sqrt{3} \approx 15 \times 1.732 = \mathbf{25.98\text{ m}}$.
   Check: $\frac{25.98}{15} = 1.732 = \tan 60^\circ$ ✅.

2. - Height up the wall: $\sin 30^\circ = \frac{h}{8} \implies h = 8 \times \frac{1}{2} = \mathbf{4\text{ m}}$.
   - Distance from wall: $\cos 30^\circ = \frac{d}{8} \implies d = 8 \times \frac{\sqrt{3}}{2} = 4\sqrt{3} \approx 4 \times 1.732 = \mathbf{6.93\text{ m}}$.
   Check: $4^2 + (4\sqrt{3})^2 = 16 + 48 = 64 = 8^2$ ✅.

3. $\tan 45^\circ = \frac{h_1}{40} \implies h_1 = 40\text{ m}$ (above eye level). Add eye height: $40 + 1.6 = \mathbf{41.6\text{ m}}$.
   Check: At $45^\circ$, height above eye level equals ground distance ($40 = 40$) ✅.

4. Depression from the cliff top $=$ elevation from the boat $= 30^\circ$.
   $\tan 30^\circ = \frac{100}{d} \implies d = \frac{100}{1/\sqrt{3}} = 100\sqrt{3} \approx 100 \times 1.732 = \mathbf{173.2\text{ m}}$.
   Check: $\frac{100}{173.2} \approx 0.5774 = \frac{1}{\sqrt{3}}$ ✅.

5. The cable is the hypotenuse ($24\text{ m}$).
   - Height: $\sin 60^\circ = \frac{h}{24} \implies h = 24 \times \frac{\sqrt{3}}{2} = 12\sqrt{3} \approx 12 \times 1.732 = \mathbf{20.78\text{ m}}$.
   - Distance: $\cos 60^\circ = \frac{d}{24} \implies d = 24 \times \frac{1}{2} = \mathbf{12\text{ m}}$.
   Check: $(12\sqrt{3})^2 + 12^2 = 432 + 144 = 576 = 24^2$ ✅.

6. Let the bent part be $l$ and the upright part be $h$.
   - $\cos 30^\circ = \frac{5}{l} \implies l = \frac{5}{\sqrt{3}/2} = \frac{10}{\sqrt{3}} \approx 5.77\text{ m}$
   - $\tan 30^\circ = \frac{h}{5} \implies h = \frac{5}{\sqrt{3}} \approx 2.89\text{ m}$
   - Total height $= h + l = \frac{5}{\sqrt{3}} + \frac{10}{\sqrt{3}} = \frac{15}{\sqrt{3}} = 5\sqrt{3} \approx 5 \times 1.732 = \mathbf{8.66\text{ m}}$.
   Check: $h^2 + 5^2 = \frac{25}{3} + 25 = \frac{100}{3} = l^2$ ✅.

7. (a) **True** ✅. They are alternate interior angles formed by the parallel horizontal lines and the line of sight.
   (b) **False** ❌. Elevation is always measured upward from the **horizontal** line.
   (c) **True** ✅. Moving closer shrinks the denominator in $\tan \theta = \frac{\text{height}}{\text{distance}}$, so $\tan \theta$ (and $\theta$) increases.

8. Let $x$ be the distance from the closer point $Q$ to the base, so $P$ is at distance $x + 40$.
   - From $Q$: $h = x\tan 60^\circ = x\sqrt{3}$.
   - From $P$: $h = \frac{x + 40}{\sqrt{3}}$.
   Equating: $x\sqrt{3} = \frac{x + 40}{\sqrt{3}} \implies 3x = x + 40 \implies x = 20$.
   - **Height:** $h = 20\sqrt{3} \approx 20 \times 1.732 = \mathbf{34.64\text{ m}}$.
   - **Original distance from $P$:** $20 + 40 = \mathbf{60\text{ m}}$.
   Check: $\frac{60}{\sqrt{3}} = 20\sqrt{3}$ ✅ and $20\sqrt{3} = 20\sqrt{3}$ ✅.

9. $\tan 60^\circ = \frac{h_1}{12} \implies h_1 = 12\sqrt{3} \approx 12 \times 1.732 = 20.78\text{ m}$.
   Add eye height: $20.78 + 1.5 = \mathbf{22.28\text{ m}}$.
   Check: $\frac{20.78}{12} \approx 1.732 = \tan 60^\circ$ ✅.

10. **Mistake:** She wrote the $\tan$ ratio upside down! By alternate angles, the angle at the car is $30^\circ$; opposite that $30^\circ$ angle is $50\text{ m}$ and adjacent is $d$, so $\tan 30^\circ = \frac{50}{d}$, not $\frac{d}{50}$.
    **Correct answer:** $d = \frac{50}{\tan 30^\circ} = 50\sqrt{3} \approx 50 \times 1.732 = \mathbf{86.6\text{ m}}$.
    Check: $\frac{50}{86.6} \approx 0.5774 = \tan 30^\circ$ ✅. Her answer $\frac{50}{\sqrt{3}} \approx 28.87\text{ m}$ also fails the sense-check: at a shallow $30^\circ$ angle, the car must be *farther* than $50\text{ m}$ from the building, not closer!

---

You now know far more than just side ratios—you can use them to measure real buildings, towers, and cliffs without ever leaving the ground. A protractor, a straw, and a weighted string are all it takes!

---

# Chapter Wrap-up: Trigonometry

| Topic | What we learned | Key takeaway |
|---|---|---|
| 1. Naming the Three Sides | Hypotenuse, opposite, and adjacent relative to an acute angle | Opposite and adjacent swap when the angle changes; the hypotenuse never changes |
| 2. $\sin$, $\cos$, and $\tan$ | Three primary ratios built from the sides (SOH-CAH-TOA) | Ratios depend only on the angle, never on triangle size |
| 3. $\csc$ ($\operatorname{cosec}$), $\sec$, and $\cot$ | Three reciprocal ratios | $\csc \theta = \frac{1}{\sin \theta}$, $\sec \theta = \frac{1}{\cos \theta}$, $\cot \theta = \frac{1}{\tan \theta}$ |
| 4. Standard Angles | Exact values for $0^\circ, 30^\circ, 45^\circ, 60^\circ, 90^\circ$ | Knowing the table solves exact expressions instantly |
| 5. One Ratio $\to$ All Ratios & Solving Triangles | Finding all ratios from one ratio, and finding missing sides | Sketch a right triangle and use Pythagoras for the missing side |
| 6. Complementary Angles & Identities | Complementary pairs (e.g., $\sin(90^\circ - \theta) = \cos \theta$) and three identities | $\sin^2 \theta + \cos^2 \theta = 1$ is the cornerstone identity |
| 7. Heights and Distances | Angles of elevation and depression in real-world problems | Draw diagram $\to$ right triangle $\to$ pick ratio $\to$ units $\to$ sense-check |

### Standard Angles Reference Table

*(Use $\sqrt{2} \approx 1.414$ and $\sqrt{3} \approx 1.732$ for decimal estimates.)*

| Ratio | $0^\circ$ | $30^\circ$ | $45^\circ$ | $60^\circ$ | $90^\circ$ |
|---|---|---|---|---|---|
| $\sin \theta$ | $0$ | $\frac{1}{2}$ | $\frac{1}{\sqrt{2}}$ ($\approx 0.707$) | $\frac{\sqrt{3}}{2}$ ($\approx 0.866$) | $1$ |
| $\cos \theta$ | $1$ | $\frac{\sqrt{3}}{2}$ ($\approx 0.866$) | $\frac{1}{\sqrt{2}}$ ($\approx 0.707$) | $\frac{1}{2}$ | $0$ |
| $\tan \theta$ | $0$ | $\frac{1}{\sqrt{3}}$ ($\approx 0.577$) | $1$ | $\sqrt{3}$ ($\approx 1.732$) | not defined |
| $\csc \theta$ | not defined | $2$ | $\sqrt{2}$ ($\approx 1.414$) | $\frac{2}{\sqrt{3}}$ ($\approx 1.155$) | $1$ |
| $\sec \theta$ | $1$ | $\frac{2}{\sqrt{3}}$ ($\approx 1.155$) | $\sqrt{2}$ ($\approx 1.414$) | $2$ | not defined |
| $\cot \theta$ | not defined | $\sqrt{3}$ ($\approx 1.732$) | $1$ | $\frac{1}{\sqrt{3}}$ ($\approx 0.577$) | $0$ |

### All Key Relations

| Concept | Formula / Relation |
|---|---|
| **Primary ratios** | $\sin \theta = \frac{\text{opp}}{\text{hyp}}, \quad \cos \theta = \frac{\text{adj}}{\text{hyp}}, \quad \tan \theta = \frac{\text{opp}}{\text{adj}}$ |
| **Reciprocal ratios** | $\csc \theta = \frac{1}{\sin \theta}, \quad \sec \theta = \frac{1}{\cos \theta}, \quad \cot \theta = \frac{1}{\tan \theta}$ |
| **Quotient relations** | $\tan \theta = \frac{\sin \theta}{\cos \theta}, \quad \cot \theta = \frac{\cos \theta}{\sin \theta}$ |
| **Complementary angles** | $\sin(90^\circ - \theta) = \cos \theta, \ \cos(90^\circ - \theta) = \sin \theta, \ \tan(90^\circ - \theta) = \cot \theta,$ $\cot(90^\circ - \theta) = \tan \theta, \ \sec(90^\circ - \theta) = \csc \theta, \ \csc(90^\circ - \theta) = \sec \theta$ |
| **Identity 1** | $\sin^2 \theta + \cos^2 \theta = 1$ |
| **Identity 2** | $1 + \tan^2 \theta = \sec^2 \theta$ |
| **Identity 3** | $1 + \cot^2 \theta = \csc^2 \theta$ |
| **Heights & distances** | Height & base: $\tan$; height & hypotenuse: $\sin$; base & hypotenuse: $\cos$ |

---

Whether it is a historic clock tower, a coastal lighthouse, or a kite soaring overhead, you can now measure its height without ever leaving the ground—all you need is one angle, one distance, and the right trigonometric ratio.
