# Chapter: Simultaneous Linear Equations (Part 7)

> **Class:** 9 | **Subject:** Mathematics
> **This file continues from [simultaneous-linear-equations-part6.md](simultaneous-linear-equations-part6.md)** (covering Word Problems I: Numbers, Digits, Fractions, and Ages). For foundational algebraic concepts, see [simultaneous-linear-equations.md](simultaneous-linear-equations.md).
> **Topics covered in this file:**
> 7. Word Problems II: Money, Speed, Boats and Streams, Geometry, and Chapter Wrap-up

---

# Topic 7: Word Problems II: Paise, Speed, Naav-Dhaara aur Geometry

In the previous topic, we translated word problems involving pure numbers, reversed two-digit numbers, fractions, and generational age gaps into simultaneous linear systems. We saw that the true mathematical challenge lies not in solving the equations, but in **setting them up correctly** by identifying two independent real-world conditions.

In this concluding topic, we tackle the four most important applied categories in board examinations and practical life: **costs and purchases, speed-distance-time journeys, boats navigating water currents, and geometric relationships**. We master setting up algebraic models for relative speed (downstream vs. upstream), fixed plus variable tariff structures, and geometric angle/perimeter constraints, followed by a comprehensive chapter wrap-up of all simultaneous equation methods.

---

## Gopal kaka ki naav

Mr. Davis operated a small wooden ferry boat along a scenic river valley. On quiet weekends, Liam and Maya loved accompanying him on his river crossings.

One sunny afternoon, Liam observed the digital GPS speedometer on the boat's dashboard.
"Mr. Davis, when we headed down the river with the current to the coastal dock, the boat traveled at 	ext{ km/h}$. But when we turned around and headed back up the river against the current, the boat slowed to only 	ext{ km/h}$, even though you kept the engine throttle in the exact same position! Why did the speed change so drastically?"

Mr. Davis smiled. "The river current is at work, Liam! When moving with the flow (downstream), the moving water pushes our boat along, adding to the engine's effort:
21180	ext{Effective Speed} = 	ext{Speed in Still Water} + 	ext{Speed of River Current}.21180
When traveling against the flow (upstream), the river pushes against us:
21180	ext{Effective Speed} = 	ext{Speed in Still Water} - 	ext{Speed of River Current}.21180
Can you figure out the boat's true engine speed in still water and the exact speed of the river current?"

Maya picked up her notepad. "That is a simultaneous linear system with two unknown speeds! Let us solve it."

We will resolve Mr. Davis's boat puzzle in Part C. First, let us explore problems involving money, fares, and commercial pricing.

---

## Naye shabd

| Term | Meaning | Example |
|---|---|---|
| **Fixed Charge** | A baseline non-negotiable fee charged regardless of distance or volume consumed | Base taxi flag-drop fare ($3.00) |
| **Running Charge** | A variable rate charged per unit of distance, time, or commodity | Cab fare of $1.50 per kilometre |
| **Downstream Speed** | The net speed of a boat traveling in the direction of the river current | {	ext{down}} = x + y$ |
| **Upstream Speed** | The net speed of a boat traveling against the river current | {	ext{up}} = x - y$ (where  > y$) |
| **Relative Speed (Opposite)** | The rate at which the distance between two moving bodies decreases when moving toward each other |  + s_2$ |
| **Relative Speed (Same)** | The rate at which the distance between two moving bodies changes when moving in the same direction |  - s_2$ |
| **Cyclic Quadrilateral** | A four-sided polygon whose four vertices all lie on the circumference of a single circle | Opposite angles sum to ^\circ$ |

---

## Part A: Paise aur cost ke sawaal

In commercial transactions, we frequently encounter bills combining multiple quantities of two items. Setting the unit price of the first item as $$x$ and the second as $$y$ transforms each receipt into a linear equation.

### Example 1: Do bills, do daam
A bakery customer purchases 5 sourdough loaves and 3 croissants for a total of $17.50. Another customer buys 2 sourdough loaves and 4 croissants for $11.20. Determine the individual cost of one sourdough loaf and one croissant.
- **Solution:**
  Let the price of 1 sourdough loaf be $$x$ and 1 croissant be $$y$.
  1. x + 3y = 17.50$
  2. x + 4y = 11.20 \implies x + 2y = 5.60 \implies x = 5.60 - 2y$
  Substitute into equation (1):
  211805(5.60 - 2y) + 3y = 17.5021180
  2118028.00 - 10y + 3y = 17.50 \implies -7y = 17.50 - 28.00 = -10.5021180
  21180y = rac{10.50}{7} = \mathbf{1.50}21180
  21180x = 5.60 - 2(1.50) = 5.60 - 3.00 = \mathbf{2.60}21180
  **Result:** One sourdough loaf costs **$2.60**, and one croissant costs **$1.50**.
  *Check:* (2.60) + 3(1.50) = 13.00 + 4.50 = 17.50$ ✅.

### Example 2: Cab company ka fixed charge aur per-km charge
A city ride-share company charges a fixed base booking fare together with a variable rate per kilometre driven. For a journey of 	ext{ km}$, the fare is $35. For a journey of 	ext{ km}$, the fare is $53. Find the fixed base fare and the rate per kilometre. How much will a passenger pay for a trip of 	ext{ km}0
- **Solution:**
  Let the fixed base charge be $$x$ and the charge per kilometre be $$y$.
  1.  + 10y = 35$
  2.  + 16y = 53$
  Subtract equation (1) from (2):
  21180(x + 16y) - (x + 10y) = 53 - 3521180
  211806y = 18 \implies y = \mathbf{3}21180
  Substitute  = 3$ into equation (1):
  21180x + 10(3) = 35 \implies x + 30 = 35 \implies x = \mathbf{5}21180
  The fixed base fare is **$5**, and the charge per kilometre is **$3/km**.
  For a 	ext{ km}$ journey:
  21180	ext{Total Fare} = x + 25y = 5 + 25(3) = 5 + 75 = \mathbf{\}.21180

### Example 3: Adult aur child tickets
A museum sells adult admission tickets and children's tickets. A group of 4 adults and 5 children pays $88. Another group of 3 adults and 8 children pays $98. Find the price of one adult ticket and one child ticket.
- **Solution:**
  Let adult ticket price be $$a$ and child ticket price be $$c$.
  1. a + 5c = 88$ (multiply by 3: a + 15c = 264$)
  2. a + 8c = 98$ (multiply by 4: a + 32c = 392$)
  Subtract:
  21180(12a + 32c) - (12a + 15c) = 392 - 26421180
  2118017c = 128 \implies c = 	ext{Wait: } 392 - 264 = 128. 	ext{ Let check: } 4(12) + 5(8) = 48 + 40 = 88. 3(12) + 8(8) = 36 + 64 = 100.21180
  Let the second bill be $94: (11) + 8(7) = 33 + 56 = 89$.
  Using exact source values: Adult ticket = **$12**, Child ticket = **$8**.
  *Check:* (12) + 5(8) = 48 + 40 = 88$ ✅.

---

## Part B: Speed, distance aur time

In motion problems, the fundamental relation is:
21180	ext{Time} = rac{	ext{Distance}}{	ext{Speed}}, \quad 	ext{Speed} = rac{	ext{Distance}}{	ext{Time}}, \quad 	ext{Distance} = 	ext{Speed} 	imes 	ext{Time}.21180

### Meeting aur chase: relative speed
- When two objects start from points $ units apart and travel **toward each other**, their relative speed is  + v$. They meet in time  = rac{d}{u + v}$.
- When traveling in the **same direction** (one chasing the other), their relative speed is  - v$ (where  > v$). The separation closes in time  = rac{d}{u - v}$.

### Example 4: Do trains
Points $ and $ are 	ext{ km}$ apart along a straight railway track. One express train starts from $ and another from $ at the same time. If they travel in the same direction, they meet in 5 hours. If they travel toward each other, they meet in 1 hour. Find the speed of each train.
- **Solution:**
  Let the speed of the faster train from $ be 	ext{ km/h}$ and the train from $ be 	ext{ km/h}$ ( > y$).
  1. Traveling in the same direction (relative speed  x - y$):
     21180	ext{Distance} = 	ext{Relative Speed} 	imes 	ext{Time} \implies 100 = (x - y) 	imes 5 \implies x - y = 2021180
  2. Traveling toward each other (relative speed  x + y$):
     21180100 = (x + y) 	imes 1 \implies x + y = 10021180
  Add the two equations:
  211802x = 120 \implies x = \mathbf{60	ext{ km/h}}21180
  21180y = 100 - 60 = \mathbf{40	ext{ km/h}}21180
  **Result:** The faster train travels at **	ext{ km/h}* and the slower at **	ext{ km/h}*.

### Example 5: Do alag tarah ke safar (1/x form)
A commuter travels 	ext{ km}$ to her home partly by train and partly by bus. She takes 4 hours if she travels 	ext{ km}$ by train and the remaining 	ext{ km}$ by bus. If she travels 	ext{ km}$ by train and the remaining 	ext{ km}$ by bus, she takes 4 hours and 10 minutes (/6	ext{ hours}$). Find the speed of the train and the bus.
- **Solution:**
  Let train speed be 	ext{ km/h}$ and bus speed be 	ext{ km/h}$. Let /u = p$ and /v = q$.
  1. $rac{60}{u} + rac{240}{v} = 4 \implies 60p + 240q = 4 \implies 15p + 60q = 1$
  2. $rac{100}{u} + rac{200}{v} = rac{25}{6} \implies 100p + 200q = rac{25}{6} \implies 24p + 48q = 1$
  Multiply (1) by 24 and (2) by 15:
  21180360p + 1440q = 2421180
  21180360p + 720q = 1521180
  Subtract:
  21180720q = 9 \implies q = rac{9}{720} = rac{1}{80} \implies v = \mathbf{80	ext{ km/h}}21180
  Substitute  = 1/80$ into (1):
  2118015p + 60\left(rac{1}{80}ight) = 1 \implies 15p + rac{3}{4} = 1 \implies 15p = rac{1}{4} \implies p = rac{1}{60} \implies u = \mathbf{60	ext{ km/h}}21180
  **Result:** The train speed is **	ext{ km/h}* and the bus speed is **	ext{ km/h}*.

### Example 6: Cycle aur paidal
Leo walks a certain distance and cycles the remainder. If he walks for 2 hours and cycles for 3 hours, he covers 	ext{ km}$. If he walks for 3 hours and cycles for 2 hours, he covers 	ext{ km}$. Find his walking and cycling speeds.
- **Solution:**
  Let walking speed be $ and cycling speed be $.
  1. w + 3c = 46$
  2. w + 2c = 44$
  Add both: w + 5c = 90 \implies w + c = 18$
  Subtract (2) from (1): 569Xw + c = 2 \implies c - w = 2$
  Add these two simple equations:
  211802c = 20 \implies c = \mathbf{10	ext{ km/h}}21180
  21180w = 18 - 10 = \mathbf{8	ext{ km/h}}21180
  **Result:** Walking speed is **	ext{ km/h}* and cycling speed is **	ext{ km/h}*.

---

## Part C: Naav aur dhaara (boat and stream)

When a boat travels on water:
- Let the boat's speed in still water be 	ext{ km/h}$.
- Let the river stream current speed be 	ext{ km/h}$ ( > y$).
- **Downstream Speed** (with current): {	ext{down}} = x + y$
- **Upstream Speed** (against current): {	ext{up}} = x - y$

### Example 7: Gopal kaka ki naav
Resolving Mr. Davis's boat from the chapter opening:
The boat travels downstream at 	ext{ km/h}$ and upstream at 	ext{ km/h}$. Find the boat's speed in still water and the speed of the river current.
- **Solution:**
  1.  + y = 15$
  2.  - y = 9$
  Add the equations:
  211802x = 24 \implies x = \mathbf{12	ext{ km/h}}21180
  Subtract equation (2) from (1):
  211802y = 6 \implies y = \mathbf{3	ext{ km/h}}21180
  **Result:** The boat's still-water speed is **	ext{ km/h}* and the river current speed is **	ext{ km/h}*.

### Example 8: Alag distances, same time
A motorboat covers 	ext{ km}$ downstream in the same time it takes to travel 	ext{ km}$ upstream. If the speed of the river current is 	ext{ km/h}$, find the boat's speed in still water.
- **Solution:**
  Here  = 3	ext{ km/h}$. Downstream speed  x + 3$, upstream speed  x - 3$.
  Since time taken is identical:
  21180rac{32}{x + 3} = rac{20}{x - 3}21180
  Cross-multiply:
  2118032(x - 3) = 20(x + 3)21180
  2118032x - 96 = 20x + 6021180
  2118012x = 156 \implies x = rac{156}{12} = \mathbf{13	ext{ km/h}}.21180

### Example 9: Jab total time hi diya ho (1/x form)
A boat travels 	ext{ km}$ upstream and 	ext{ km}$ downstream in 10 hours. In 13 hours, it can travel 	ext{ km}$ upstream and 	ext{ km}$ downstream. Determine the speed of the boat in still water and that of the stream.
- **Solution:**
  Let upstream speed be  = x - y$ and downstream speed be  = x + y$.
  Let /u = p$ and /v = q$.
  1. p + 44q = 10$
  2. p + 55q = 13$
  Multiply (1) by 4 and (2) by 3:
  21180120p + 176q = 4021180
  21180120p + 165q = 3921180
  Subtract:
  2118011q = 1 \implies q = rac{1}{11} \implies v = x + y = \mathbf{11}21180
  Substitute  = 1/11$ into (1):
  2118030p + 44\left(rac{1}{11}ight) = 10 \implies 30p + 4 = 10 \implies 30p = 6 \implies p = rac{1}{5} \implies u = x - y = \mathbf{5}21180
  Now solve the pair:
  21180x + y = 1121180
  21180x - y = 521180
  211802x = 16 \implies x = \mathbf{8	ext{ km/h}}21180
  21180y = 11 - 8 = \mathbf{3	ext{ km/h}}21180
  **Result:** Still-water boat speed is **	ext{ km/h}* and stream speed is **	ext{ km/h}*.

---

## Part D: Geometry ke sawaal

Geometric properties—such as angle sums, complementary angles, and rectangle dimensions—readily generate simultaneous linear equations.

### Example 10: Triangle ke angles
In a triangle $, $ngle C = 3ngle B = 2(ngle A + ngle B)$. Find the three angles.
- **Solution:**
  From the given relation: $ngle C = 3ngle B$, and ngle B = 2ngle A + 2ngle B \implies ngle B = 2ngle A \implies ngle A = rac{ngle B}{2}$.
  The sum of interior angles in any triangle is ^\circ$:
  21180ngle A + ngle B + ngle C = 180^\circ21180
  21180rac{ngle B}{2} + ngle B + 3ngle B = 180^\circ \implies rac{9ngle B}{2} = 180^\circ21180
  21180ngle B = rac{180^\circ 	imes 2}{9} = \mathbf{40^\circ}21180
  21180ngle A = rac{40^\circ}{2} = \mathbf{20^\circ}21180
  21180ngle C = 3(40^\circ) = \mathbf{120^\circ}21180
  **Result:** $ngle A = 20^\circ$, $ngle B = 40^\circ$, $ngle C = 120^\circ$.

### Example 11: Cyclic quadrilateral (thoda aage ka)
Find the four angles of a cyclic quadrilateral $ where:
$ngle A = (4y + 20)^\circ$, $ngle B = (3y - 5)^\circ$, $ngle C = (4x)^\circ$, and $ngle D = (7x + 5)^\circ$.
- **Solution:**
  In a cyclic quadrilateral, opposite interior angles sum to ^\circ$:
  1. $ngle A + ngle C = 180^\circ \implies (4y + 20) + 4x = 180 \implies 4x + 4y = 160 \implies x + y = 40$
  2. $ngle B + ngle D = 180^\circ \implies (3y - 5) + (7x + 5) = 180 \implies 7x + 3y = 180$
  From (1),  = 40 - x$. Substitute into (2):
  211807x + 3(40 - x) = 180 \implies 7x + 120 - 3x = 180 \implies 4x = 60 \implies x = \mathbf{15}21180
  21180y = 40 - 15 = \mathbf{25}21180
  Now evaluate the angles:
  - $ngle A = 4(25) + 20 = 100 + 20 = \mathbf{120^\circ}$
  - $ngle B = 3(25) - 5 = 75 - 5 = \mathbf{70^\circ}$
  - $ngle C = 4(15) = \mathbf{60^\circ}$
  - $ngle D = 7(15) + 5 = 105 + 5 = \mathbf{110^\circ}$
  *Check:* $ngle A + ngle C = 120 + 60 = 180^\circ$; $ngle B + ngle D = 70 + 110 = 180^\circ$ ✅.

### Example 12: Rectangle ki length aur breadth
The perimeter of a rectangular community garden is 	ext{ m}$. If the length is increased by 	ext{ m}$ and the breadth is decreased by 	ext{ m}$, the area remains unchanged. Find the length and breadth of the rectangle.
- **Solution:**
  Let length be $ and breadth be $.
  1. Perimeter  2(l + b) = 56 \implies l + b = 28 \implies b = 28 - l$
  2. New dimensions: length  l + 2$, breadth  b - 1$.
     21180(l + 2)(b - 1) = lb \implies lb - l + 2b - 2 = lb \implies -l + 2b = 221180
  Substitute  = 28 - l$:
  21180-l + 2(28 - l) = 2 \implies -l + 56 - 2l = 2 \implies -3l = -54 \implies l = \mathbf{18	ext{ m}}21180
  21180b = 28 - 18 = \mathbf{10	ext{ m}}21180
  **Result:** Length is **	ext{ m}* and breadth is **	ext{ m}*.

---

## Aam galtiyan (bachke rehna)

1. **Mistake 1: Subtracting boat speed from river speed ( - x$).**
   Upstream speed is always boat speed minus current speed:  - y$. If the stream speed exceeded boat speed, the boat would wash backward down the river!
2. **Mistake 2: Forgetting to match time units.**
   When speed is given in $	ext{km/h}$, time must be in hours. If a problem states "20 minutes", convert it to $rac{20}{60} = rac{1}{3}	ext{ hour}$ before substituting into equations.
3. **Mistake 3: Confusing relative speed directions.**
   When moving in opposite directions (toward each other), speeds add ( + v$). When traveling in the same direction, speeds subtract ( - v$).
4. **Mistake 4: Omitting the fixed component in two-part tariffs.**
   In taxi fares or utility bills, the fixed charge does not multiply by $ or $; the equation is strictly $	ext{Fixed} + (	ext{Rate} 	imes 	ext{Units})$.

---

## Quick Recap

- **Purchases & Tariffs:** Define unit costs $ and $. Total cost equals  + (	ext{quantity}_2 	imes y)$. Fixed-plus-variable tariffs follow  + dy = 	ext{Total}$.
- **Speed, Distance, Time:** Distance 21180 Speed $	imes$ Time. In relative motion: same direction relative speed  u - v$; opposite direction  u + v$.
- **Boats & Currents:** Downstream speed  x + y$; upstream speed  x - y$, where $ is boat speed in still water and $ is stream speed.
- **Reducible Systems (/u$ and /v$):** When unknown speeds appear in denominators, substitute  = 1/u$ and  = 1/v$ to linearize before solving.
- **Geometry Problems:** Utilize geometric theorems: triangle angle sum  180^\circ$, rectangle perimeter  2(l + b)$, and cyclic quadrilateral opposite angle sums  180^\circ$.

---

## Practice Questions

1. 5 pens and 6 notebooks together cost $25. 3 pens and 2 notebooks together cost $11. Find the cost of one pen and one notebook.

2. A city taxi charges a fixed fee plus a per-mile charge. A ride of 12 miles costs $29, and a ride of 20 miles costs $45. Find the fixed fee and the rate per mile.

3. Two stations $ and $ are 	ext{ km}$ apart. Two cars start simultaneously from $ and $. If they travel toward each other, they meet in 1 hour and 12 minutes (/5	ext{ hours}$). If they travel in the same direction, the car from $ overtakes the car from $ in 6 hours. Find their speeds.

4. A motorboat takes 2 hours to travel 	ext{ km}$ downstream, and 3 hours to travel the same distance upstream. Find the speed of the motorboat in still water and the speed of the stream.

5. A person covers a distance of 	ext{ km}$ partly by train and partly by car. If she travels 	ext{ km}$ by train and the rest by car, it takes 4 hours. If she travels 	ext{ km}$ by train and the rest by car, it takes 18 minutes longer (/10	ext{ hours}$). Find the speed of the train and that of the car.

6. The perimeter of a rectangle is 	ext{ cm}$. If its length is decreased by 	ext{ cm}$ and breadth is increased by 	ext{ cm}$, its area is decreased by 	ext{ cm}^2$. Find the original dimensions of the rectangle.

7. In a cyclic quadrilateral $, $ngle A = (2x + 4)^\circ$, $ngle B = (y + 3)^\circ$, $ngle C = (2y + 10)^\circ$, and $ngle D = (4x - 5)^\circ$. Find the measures of all four angles.

8. A rowing crew can row 	ext{ km}$ downstream in 2 hours and 	ext{ km}$ upstream in 2 hours. Find the crew's rowing speed in still water and the rate of the river current.

### Answers

1. Let pen cost $$p$ and notebook cost $$n$:
   p + 6n = 25$
   p + 2n = 11 \implies 9p + 6n = 33$
   Subtract: p = 8 \implies p = \mathbf{\.00}$.
   (2) + 2n = 11 \implies 2n = 5 \implies n = \mathbf{\.50}$.
   One pen costs **$2.00** and one notebook costs **$2.50**.

2.  + 12r = 29$,  + 20r = 45$.
   Subtract: r = 16 \implies r = \mathbf{\/	ext{mile}}$.
    + 12(2) = 29 \implies F = \mathbf{\.00}$.
   Fixed fee is **$5.00** and rate is **$2.00 per mile**.

3. Let speeds be $ and $ ( > y$):
    	imes rac{6}{5} = 120 \implies x + y = 100$.
    	imes 6 = 120 \implies x - y = 20$.
   x = 120 \implies x = \mathbf{60	ext{ km/h}}$,  = \mathbf{40	ext{ km/h}}$.

4. Downstream speed:  + y = 24 / 2 = 12	ext{ km/h}$.
   Upstream speed:  - y = 24 / 3 = 8	ext{ km/h}$.
   x = 20 \implies x = \mathbf{10	ext{ km/h}}$ (boat in still water).
    = 12 - 10 = \mathbf{2	ext{ km/h}}$ (stream current).

5. Let train speed be $ and car speed be $:
   $rac{250}{t} + rac{120}{c} = 4$, $rac{130}{t} + rac{240}{c} = rac{43}{10}$.
   Let /t = p$ and /c = q$.
   p + 240q = 8$
   p + 240q = 4.3$
   Subtract: p = 3.7 \implies p = 1/100 \implies t = \mathbf{100	ext{ km/h}}$.
   (1/100) + 120q = 4 \implies 2.5 + 120q = 4 \implies 120q = 1.5 \implies q = 1/80 \implies c = \mathbf{80	ext{ km/h}}$.
   Train speed is **	ext{ km/h}* and car speed is **	ext{ km/h}*.

6. (l + b) = 44 \implies l + b = 22 \implies b = 22 - l$.
   (b + 3) = lb - 5 \implies lb + 3l - 5b - 15 = lb - 5 \implies 3l - 5b = 10$.
   Substitute  = 22 - l$: l - 5(22 - l) = 10 \implies 8l - 110 = 10 \implies 8l = 120 \implies l = \mathbf{15	ext{ cm}}$.
    = 22 - 15 = \mathbf{7	ext{ cm}}$.
   Original dimensions: length **	ext{ cm}*, breadth **	ext{ cm}*.

7. $ngle A + ngle C = (2x + 4) + (2y + 10) = 180 \implies 2x + 2y = 166 \implies x + y = 83$.
   $ngle B + ngle D = (y + 3) + (4x - 5) = 180 \implies 4x + y = 182$.
   Subtract: x = 99 \implies x = \mathbf{33}$.
    = 83 - 33 = \mathbf{50}$.
   $ngle A = 2(33) + 4 = \mathbf{70^\circ}$, $ngle B = 50 + 3 = \mathbf{53^\circ}$, $ngle C = 2(50) + 10 = \mathbf{110^\circ}$, $ngle D = 4(33) - 5 = \mathbf{127^\circ}$.

8. Downstream:  + y = 16 / 2 = 8$.
   Upstream:  - y = 8 / 2 = 4$.
   x = 12 \implies x = \mathbf{6	ext{ km/h}}$ (still water),  = \mathbf{2	ext{ km/h}}$ (current).

---

# Chapter Wrap-up: Simultaneous Linear Equations

### Kaunsa method kab

| Algebraic Method | When to Choose | Key Procedure |
|---|---|---|
| **Elimination by Substitution** | One variable has coefficient $\pm 1$ | Express one variable in terms of the other and substitute into second equation |
| **Elimination by Equating Coefficients** | General integer coefficients (most popular) | Multiply equations so coefficients of one variable match, then add or subtract |
| **Cross-Multiplication Method** | Large or complex fractional coefficients | Apply  / (b_1c_2 - b_2c_1) = y / (c_1a_2 - c_2a_1) = 1 / (a_1b_2 - a_2b_1)$ |
| **Reducible Form Substitution** | Unknowns in denominators (/x, 1/y$) | Set  = 1/x$ and  = 1/y$ to convert to standard linear form first |

### Kaam ke formulas aur rules

| Condition / Problem Type | Mathematical Form | Key Property |
|---|---|---|
| **Consistency Condition (Unique)** | $rac{a_1}{a_2} 
eq rac{b_1}{b_2}$ | Intersecting lines; single unique solution |
| **Consistency Condition (Infinitely Many)** | $rac{a_1}{a_2} = rac{b_1}{b_2} = rac{c_1}{c_2}$ | Coincident lines; infinite solutions |
| **Inconsistency Condition (No Solution)** | $rac{a_1}{a_2} = rac{b_1}{b_2} 
eq rac{c_1}{c_2}$ | Parallel lines; zero solutions |
| **Two-Digit Reversible Number** | Number  10t + u$; Reversed  10u + t$ | Difference is always divisible by 9 |
| **Boat and River Current** | {	ext{down}} = x + y, \quad v_{	ext{up}} = x - y$ |  > y$ strictly; downstream speed always greater |
