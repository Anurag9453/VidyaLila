# Chapter: Force and Laws of Motion (Part 8)

> **Class:** 9 | **Subject:** Physics
> **This file continues from [force-and-laws-of-motion-part7.md](force-and-laws-of-motion-part7.md)** (covering Newton's Third Law: action and reaction). The chapter begins at [force-and-laws-of-motion.md](force-and-laws-of-motion.md).
> **Topics covered in this file:**
> 8. Conservation of Momentum
> + Complete Chapter Wrap-up

---

# Topic 8: Conservation of Momentum

In the previous topic, we explored Newton's Third Law: when two objects interact, the forces they exert on each other are **strictly equal in magnitude, opposite in direction**, and act on **different bodies**. Because these equal and opposite forces act for the exact same duration of time, how do they affect the momentum of the interacting system as a whole? Does momentum disappear, or does it remain constant? In this culminating topic of the chapter, we connect Topic 5 (momentum), Topic 6 ($F = ma$), and Topic 7 (action-reaction) into one universal law: the **Law of Conservation of Momentum**.

---

## The Bumper Cars at the Fairground

At the annual county fair, the most crowded attraction was the bumper cars (dodgems) arena. The ride operator, **Mr. Henderson**, stood on the observation platform with his whistle, monitoring the electric track.

High school freshman **Leo** steered his bumper car at a brisk pace of $3\text{ m/s}$ across the slick metallic floor, heading directly toward another car that was stopped dead in the center of the ring. **Wham!** With a loud rubber thump, Leo's car slammed into the stationary car. 

Immediately following the collision, Leo's car noticeably slowed down, while the previously stationary car jolted forward across the arena.

When the session ended, Leo hopped out of his car and approached Mr. Henderson. "Mr. Henderson, when I struck that parked car, my vehicle lost a huge amount of its speed, while the parked car shot forward across the arena floor. Where did my car's momentum go?"

Mr. Henderson smiled. "Your momentum didn't disappear into thin air, Leo! It was transferred directly into the other car. If you calculate the **total combined momentum of both cars together**, you will find that the total before the crash equals the exact total after the crash."

Leo was fascinated. Let us examine the mathematics and physics to prove that Mr. Henderson was completely right!

---

## Key Vocabulary

| Term | Meaning (Plain English) | Example |
|---|---|---|
| **System** | A chosen group of interacting bodies considered together as a single entity | Two colliding bumper cars |
| **Isolated System** | A physical system subjected to zero net external unbalanced forces | Colliding carts on a frictionless air track |
| **External Force** | A force exerted on the system by bodies outside the system boundary | Ground friction acting over an extended time |
| **Total Momentum** | The algebraic vector sum of the individual momenta of all bodies in a system | $p_{\text{total}} = p_1 + p_2$ |
| **Conservation of Momentum** | In an isolated system, the total linear momentum before an interaction equals the total linear momentum after | $600\text{ kg}\cdot\text{m/s}$ before = $600\text{ kg}\cdot\text{m/s}$ after |
| **Collision** | An isolated event in which two or more moving bodies exert strong mutual forces over a brief interval | Bumper cars colliding |
| **Recoil** | The backward kick of a firearm, cannon, or launch vehicle when a projectile is propelled forward | A rifle kicking back against the shoulder |

---

## Part A: What the Law of Conservation of Momentum States

> **The Law of Conservation of Momentum:** When two or more bodies interact in an isolated system (where the net external force is zero), the **total momentum of the system remains constant**.
> 
> $$\text{Total Initial Momentum} = \text{Total Final Momentum}$$  
> $$p_{\text{initial}} = p_{\text{final}}$$

To "conserve" means to keep unchanged. While individual objects within the system may speed up, slow down, or reverse direction, **the momentum lost by one body is precisely gained by the other**.

### Derivation: Where Does This Law Come From? (Step-by-Step)

Consider two colliding bodies moving along the same straight line: Body 1 of mass $m_1$ with initial velocity $u_1$, and Body 2 of mass $m_2$ with initial velocity $u_2$. They collide for a brief contact time $t$, emerging with final velocities $v_1$ and $v_2$.

```
 Before Collision:    m1 --> u1        m2 --> u2
                     [ A ]            [ B ]

 During Collision:  <-- -F [ A ][ B ] +F -->    (Equal and opposite forces
                                                 acting for time t)

 After Collision:     m1 --> v1        m2 --> v2
                     [ A ]            [ B ]
```

> **Figure 8.1** – Derivation of conservation of momentum: mutual internal action-reaction forces act for identical time intervals ($t$), ensuring that the momentum change of Body 1 exactly balances the momentum change of Body 2.

**Step 1 (Newton's Third Law):**  
During the collision, Body 1 exerts an action force $F$ on Body 2. By Newton's Third Law, Body 2 simultaneously exerts an equal and opposite reaction force $-F$ on Body 1:  
$$F_{12} = -F_{21}$$

**Step 2 (Identical Interaction Duration):**  
Both forces act over the exact same contact time $t$, because neither body can exert a force on the other without being in contact.

**Step 3 (Newton's Second Law):**  
From Topic 6, $F = \frac{m(v - u)}{t}$, which rearranges to:  
$$F \times t = m(v - u) = \Delta p$$  
The product of force and time equals the change in momentum:
- For Body 2: $F \times t = m_2(v_2 - u_2)$
- For Body 1: $(-F) \times t = m_1(v_1 - u_1)$

**Step 4 (Equating Momentum Changes):**  
Since $F \times t$ and $(-F) \times t$ are equal in magnitude and opposite in sign:  
$$m_1(v_1 - u_1) = -m_2(v_2 - u_2)$$

**Step 5 (Rearranging Terms):**  
Expand both sides:  
$$m_1 v_1 - m_1 u_1 = -m_2 v_2 + m_2 u_2$$

Collect all initial terms ($u$) on the left and all final terms ($v$) on the right:

> $$m_1 u_1 + m_2 u_2 = m_1 v_1 + m_2 v_2$$

$$\text{Total Momentum Before Collision} = \text{Total Momentum After Collision}$$

Notice the elegance of this derivation: the Law of Conservation of Momentum is not an arbitrary rule; it is the direct mathematical consequence of Newton's Second and Third Laws combined!

### Sign Conventions for Velocity and Momentum

Because momentum is a vector, we designate one direction along the line of motion as **positive ($+$)** (typically toward the right) and the reverse direction as **negative ($-$)** (toward the left). Every velocity term in the equation must carry its correct algebraic sign:
- Moving right at $5\text{ m/s} \implies +5\text{ m/s}$
- Moving left at $5\text{ m/s} \implies -5\text{ m/s}$

---

## Part B: Types of Collinear Collisions

| Physical Scenario | Description | Governing Equation |
|---|---|---|
| **1. Moving Body Strikes Stationary Body** | Initial velocity $u_2 = 0$ | $m_1 u_1 + 0 = m_1 v_1 + m_2 v_2$ |
| **2. Rear-End Collision (Same Direction)** | Fast rear body overtakes slower leading body | $u_1 > 0$ and $u_2 > 0$ |
| **3. Head-On Collision (Opposite Directions)** | Two bodies approach from opposite sides | $u_1 > 0$ and $u_2 < 0$ |
| **4. Inelastic Coalescence (Sticking Together)** | Colliding bodies couple and move with common velocity $v$ | $m_1 u_1 + m_2 u_2 = (m_1 + m_2)v$ |
| **5. Elastic Rebound (Bouncing Apart)** | Bodies bounce apart with separate final velocities | $m_1 u_1 + m_2 u_2 = m_1 v_1 + m_2 v_2$ |
| **6. Explosion / Recoil from Rest** | System initially at rest ($u_1 = u_2 = 0$) bursts apart | $0 = m_1 v_1 + m_2 v_2$ |

When bodies stick together upon impact, they form a single combined mass $(m_1 + m_2)$ traveling at a single shared velocity $v$.

---

## Part C: Solved Examples

### Example 1: Moving Cart Collides and Locks with a Stationary Cart

Trolley A ($m_1 = 2\text{ kg}$) rolls along a frictionless track at $6\text{ m/s}$ toward the right ($+$) and collides with stationary Trolley B ($m_2 = 4\text{ kg}$). Upon impact, a velcro coupling locks them together. Find their common velocity after the collision.
- Initial momentum:  
  $$p_i = m_1 u_1 + m_2 u_2 = (2\text{ kg} \times 6\text{ m/s}) + (4\text{ kg} \times 0) = 12\text{ kg}\cdot\text{m/s}$$
- Final momentum:  
  $$p_f = (m_1 + m_2)v = (2\text{ kg} + 4\text{ kg})v = 6v\text{ kg}\cdot\text{m/s}$$
- By conservation of momentum:  
  $$12 = 6v \implies v = \frac{12}{6} = \mathbf{+2\text{ m/s}}\quad (\text{to the right})$$
- **Check:** Final momentum = $6\text{ kg} \times 2\text{ m/s} = 12\text{ kg}\cdot\text{m/s} = p_i$ ✅

### Example 2: Two Bodies Moving in the Same Direction

A body of mass $5\text{ kg}$ moving at $+4\text{ m/s}$ collides from behind with a body of mass $3\text{ kg}$ moving at $+2\text{ m/s}$. After the collision, the $3\text{ kg}$ body accelerates forward to $+4.5\text{ m/s}$. What is the final velocity of the $5\text{ kg}$ body?
- Initial momentum:  
  $$p_i = (5 \times 4) + (3 \times 2) = 20 + 6 = \mathbf{26\text{ kg}\cdot m/s}$$
- Final momentum:  
  $$p_f = (5 \times v_1) + (3 \times 4.5) = 5v_1 + 13.5$$
- By conservation of momentum:  
  $$26 = 5v_1 + 13.5 \implies 5v_1 = 12.5 \implies v_1 = \frac{12.5}{5} = \mathbf{+2.5\text{ m/s}}$$
- **Check:** $(5 \times 2.5) + (3 \times 4.5) = 12.5 + 13.5 = 26\text{ kg}\cdot\text{m/s}$ ✅

### Example 3: Head-on Collision Followed by Coalescence (Sticking Together)

Trolley A ($3\text{ kg}$) rolls rightward at $+4\text{ m/s}$, and Trolley B ($5\text{ kg}$) rolls leftward at $-2\text{ m/s}$. They collide head-on and latch together. Determine their combined velocity after the crash.
- Initial momentum:  
  $$p_i = [3 \times (+4)] + [5 \times (-2)] = +12 - 10 = \mathbf{+2\text{ kg}\cdot m/s}$$
- Final momentum:  
  $$p_f = (3 + 5)v = 8v$$
- By conservation of momentum:  
  $$2 = 8v \implies v = \frac{2}{8} = \mathbf{+0.25\text{ m/s}}\quad (\text{to the right})$$

```
 Before:     3 kg --> +4 m/s        <-- -2 m/s  5 kg
             [ A ]                              [ B ]
                        Collision
 After:             [ A + B ] --> +0.25 m/s  (8 kg combined)
```

> **Figure 8.2** – Head-on collision: the rightward momentum (+12) exceeds the leftward momentum (-10), leaving a net positive momentum (+2). The coupled 8 kg mass coasts slowly to the right at $+0.25\text{ m/s}$.

- **Check:** $8\text{ kg} \times 0.25\text{ m/s} = 2\text{ kg}\cdot\text{m/s}$ ✅  
  *(Notice: Forgetting the negative sign would yield $12 + 10 = 22 \implies v = 2.75\text{ m/s}$, which is completely erroneous!)*

### Example 4: Colliding Bodies Rebounding Apart

An object of mass $2\text{ kg}$ traveling at $+5\text{ m/s}$ collides with a stationary object of mass $3\text{ kg}$. Following the collision, the $2\text{ kg}$ object rebounds backward to the left at $-1\text{ m/s}$. Calculate the velocity of the $3\text{ kg}$ object.
- Initial momentum:  
  $$p_i = (2 \times 5) + (3 \times 0) = \mathbf{+10\text{ kg}\cdot m/s}$$
- Final momentum:  
  $$p_f = [2 \times (-1)] + (3 \times v_2) = -2 + 3v_2$$
- Equating $p_i = p_f$:  
  $$10 = -2 + 3v_2 \implies 3v_2 = 12 \implies v_2 = \mathbf{+4\text{ m/s}}\quad (\text{to the right})$$
- **Check:** $[2 \times (-1)] + (3 \times 4) = -2 + 12 = +10\text{ kg}\cdot\text{m/s}$ ✅

### Example 5: Recoil Velocity of a Fired Rifle

A marksman fires a rifle of mass $4\text{ kg}$, which ejects a bullet of mass $0.02\text{ kg}$ (20 g) with a muzzle velocity of $300\text{ m/s}$ to the right ($+$). Find the recoil velocity of the rifle.
- Prior to firing, both rifle and bullet are stationary:  
  $$p_i = 0\text{ kg}\cdot\text{m/s}$$
- Final momentum:  
  $$p_f = (m_{\text{bullet}} \times v_{\text{bullet}}) + (m_{\text{rifle}} \times v_{\text{rifle}})$$  
  $$p_f = (0.02\text{ kg} \times 300\text{ m/s}) + (4\text{ kg} \times v_{\text{rifle}}) = 6 + 4v_{\text{rifle}}$$
- By conservation of momentum:  
  $$0 = 6 + 4v_{\text{rifle}} \implies 4v_{\text{rifle}} = -6 \implies v_{\text{rifle}} = \frac{-6}{4} = \mathbf{-1.5\text{ m/s}}$$
- The rifle recoils backward (to the left) at a speed of **1.5 m/s**.

```
 Before Firing:        [===== RIFLE =====] (Bullet)      At rest: Total p = 0

 After Firing:       <-- Recoil  [===== RIFLE =====]  o--> Bullet
                     -1.5 m/s                         +300 m/s
```

> **Figure 8.3** – Firing a rifle: forward bullet momentum (+6 kg·m/s) is balanced by backward rifle momentum (-6 kg·m/s), preserving total system momentum at zero.

- **Check:** $(0.02 \times 300) + [4 \times (-1.5)] = +6 - 6 = 0$ ✅
- **Why is a heavier firearm safer?**  
  Since $v_{\text{recoil}} = -p_{\text{bullet}} / m_{\text{firearm}}$, doubling firearm mass to $8\text{ kg}$ cuts recoil velocity in half: $v = -6 / 8 = -0.75\text{ m/s}$. Heavy barrels absorb recoil energy effectively.

### Example 6: A Girl Leaping Forward from a Stationary Cart

A girl of mass $40\text{ kg}$ stands on a stationary wheeled flatbed cart of mass $60\text{ kg}$. She jumps forward off the cart with a horizontal velocity of $+2\text{ m/s}$. Find the recoil velocity of the cart.
- Initial state: both at rest $\implies p_i = 0$.
- Final state:  
  $$(40\text{ kg} \times 2\text{ m/s}) + (60\text{ kg} \times v_{\text{cart}}) = 0$$  
  $$80 + 60v_{\text{cart}} = 0 \implies v_{\text{cart}} = \frac{-80}{60} = \mathbf{-1.33\text{ m/s}}\quad \left(-\frac{4}{3}\text{ m/s}\right)$$
- The cart rolls backward at **1.33 m/s**.
- **Check:** $40 \times 2 = +80$; $60 \times (-4/3) = -80$; $+80 - 80 = 0$ ✅

### Example 7: Leo's Fairground Bumper Cars (Solving the Story)

Let us solve Leo's bumper car collision with the actual numbers:
- Bumper Car A (Leo): $m_1 = 200\text{ kg}$, $u_1 = +3\text{ m/s}$
- Bumper Car B (Stationary): $m_2 = 200\text{ kg}$, $u_2 = 0$
- After impact, Car A continues forward at $v_1 = +1\text{ m/s}$. What is the final velocity of Car B?

Calculation:
- $p_i = (200 \times 3) + (200 \times 0) = \mathbf{600\text{ kg}\cdot m/s}$
- $p_f = (200 \times 1) + (200 \times v_2) = 200 + 200v_2$
- $600 = 200 + 200v_2 \implies 200v_2 = 400 \implies v_2 = \mathbf{+2\text{ m/s}}$

| Object | Initial Momentum ($p_i$) | Final Momentum ($p_f$) | Momentum Change ($\Delta p$) |
|---|---|---|---|
| Car A (Leo) | $200 \times 3 = \mathbf{600\text{ kg}\cdot m/s}$ | $200 \times 1 = \mathbf{200\text{ kg}\cdot m/s}$ | $-400\text{ kg}\cdot\text{m/s}$ (lost) |
| Car B (Parked) | $200 \times 0 = \mathbf{0\text{ kg}\cdot m/s}$ | $200 \times 2 = \mathbf{400\text{ kg}\cdot m/s}$ | $+400\text{ kg}\cdot\text{m/s}$ (gained) |
| **System Total** | **600 kg·m/s** | **600 kg·m/s** | **0 kg·m/s (Conserved)** |

```
 Before:     [ Car A ] --> 3 m/s            [ Car B ] at rest
             200 kg                         200 kg

 After:           [ Car A ] --> 1 m/s       [ Car B ] --> 2 m/s
```

> **Figure 8.4** – Bumper cars: Car A transfers 400 kg·m/s of momentum to Car B. The total system momentum remains 600 kg·m/s throughout.

Leo's car lost exactly $400\text{ kg}\cdot\text{m/s}$, and Car B gained exactly $400\text{ kg}\cdot\text{m/s}$. Mr. Henderson's claim was completely verified!

### Example 8: Fragmentation or Explosion of a Stationary Object

A stationary artillery shell of mass $3\text{ kg}$ detonates into two fragments: a $2\text{ kg}$ chunk flies to the right at $+4\text{ m/s}$. What is the velocity of the remaining $1\text{ kg}$ fragment?
- Initial momentum: $p_i = 0$.
- Final momentum:  
  $$(2\text{ kg} \times 4\text{ m/s}) + (1\text{ kg} \times v_2) = 0$$  
  $$8 + 1v_2 = 0 \implies v_2 = \mathbf{-8\text{ m/s}}\quad (\text{to the left})$$
- **Check:** $(2 \times 4) + [1 \times (-8)] = +8 - 8 = 0$ ✅
- The lighter fragment flies away with twice the speed of the heavier fragment.

### Example 9: Determining an Unknown Mass from Collision Data

A cart of mass $1.5\text{ kg}$ rolling at $4\text{ m/s}$ strikes a stationary cart of unknown mass $m$. They stick together and roll forward at $1\text{ m/s}$. Find the mass of the second cart.
- $p_i = (1.5 \times 4) + (m \times 0) = 6\text{ kg}\cdot\text{m/s}$
- $p_f = (1.5 + m) \times 1 = 1.5 + m$
- $6 = 1.5 + m \implies m = 6 - 1.5 = \mathbf{4.5\text{ kg}}$
- **Check:** $(1.5 + 4.5) \times 1 = 6\text{ kg}\cdot\text{m/s}$ ✅

### Example 10: Heavy Cannon Firing a Cannonball

A field cannon of mass $500\text{ kg}$ fires a $5\text{ kg}$ iron cannonball with a horizontal muzzle velocity of $100\text{ m/s}$. Determine the recoil velocity of the cannon.
- $p_{\text{cannonball}} = 5\text{ kg} \times 100\text{ m/s} = +500\text{ kg}\cdot\text{m/s}$
- $p_{\text{cannon}} = -500\text{ kg}\cdot\text{m/s}$
- $v_{\text{cannon}} = \frac{-500\text{ kg}\cdot\text{m/s}}{500\text{ kg}} = \mathbf{-1\text{ m/s}}\quad (\text{backward})$
- **Check:** $+500 + [500 \times (-1)] = 0$ ✅

### Example 11: A Person Leaping from a Rowboat to the Pier

A person of mass $50\text{ kg}$ leaps forward onto a wooden pier at $3\text{ m/s}$ from a stationary rowboat of mass $150\text{ kg}$. What is the recoil velocity of the rowboat?
- $p_{\text{person}} = 50\text{ kg} \times (+3\text{ m/s}) = +150\text{ kg}\cdot\text{m/s}$
- $p_{\text{boat}} = 150\text{ kg} \times v_{\text{boat}} = -150\text{ kg}\cdot\text{m/s}$
- $v_{\text{boat}} = \frac{-150}{150} = \mathbf{-1\text{ m/s}}\quad (\text{away from pier})$
- **Check:** $+150 + [150 \times (-1)] = 0$ ✅

### Example 12: Collision Between High-Mass and Low-Mass Vehicles

A heavy commercial truck ($2000\text{ kg}$) traveling at $10\text{ m/s}$ strikes a stationary motor scooter ($100\text{ kg}$) and locks with it. Find their common velocity.
- $p_i = 2000 \times 10 = 20{,}000\text{ kg}\cdot\text{m/s}$
- $v = \frac{20{,}000\text{ kg}\cdot\text{m/s}}{2000 + 100\text{ kg}} = \frac{20{,}000}{2100} \approx \mathbf{9.52\text{ m/s}}$  
  *(The heavy truck barely slows down, dropping only from 10 m/s to 9.52 m/s).*

Now consider the reverse: the $100\text{ kg}$ scooter traveling at $10\text{ m/s}$ strikes the stationary $2000\text{ kg}$ truck and locks with it:
- $p_i = 100 \times 10 = 1000\text{ kg}\cdot\text{m/s}$
- $v = \frac{1000\text{ kg}\cdot\text{m/s}}{2100\text{ kg}} \approx \mathbf{0.48\text{ m/s}}$  
  *(The scooter's velocity is nearly obliterated, dropping from 10 m/s to 0.48 m/s!)*
- **Check:** $2100 \times 9.524 \approx 20{,}000$ ✅; $2100 \times 0.476 \approx 1000$ ✅
- This stark asymmetry demonstrates why lighter vehicles suffer devastating velocity shocks in highway collisions.

### Comprehensive Momentum Verification Table

| Trial | Mass $m_1$ | Initial $u_1$ | Mass $m_2$ | Initial $u_2$ | Initial Total $p_i$ | Final $v_1$ | Final $v_2$ | Final Total $p_f$ |
|---|---|---|---|---|---|---|---|---|
| Ex 1 (Sticking) | $2\text{ kg}$ | $+6\text{ m/s}$ | $4\text{ kg}$ | $0$ | **+12** | $+2\text{ m/s}$ | $+2\text{ m/s}$ | $(2\times 2)+(4\times 2) = \mathbf{+12}$ |
| Ex 3 (Head-on) | $3\text{ kg}$ | $+4\text{ m/s}$ | $5\text{ kg}$ | $-2\text{ m/s}$ | **+2** | $+0.25\text{ m/s}$ | $+0.25\text{ m/s}$ | $8 \times 0.25 = \mathbf{+2}$ |
| Ex 4 (Rebound) | $2\text{ kg}$ | $+5\text{ m/s}$ | $3\text{ kg}$ | $0$ | **+10** | $-1\text{ m/s}$ | $+4\text{ m/s}$ | $(2\times -1)+(3\times 4) = \mathbf{+10}$ |
| Ex 5 (Rifle) | $0.02\text{ kg}$ | $0$ | $4\text{ kg}$ | $0$ | **0** | $+300\text{ m/s}$ | $-1.5\text{ m/s}$ | $(0.02\times 300)+(4\times -1.5) = \mathbf{0}$ |

---

## Part D: Further Illustrations and Practical Constraints

- **Rockets and Deflating Balloons:** As high-speed gas shoots backward, the rocket or balloon acquires an equal forward momentum, conserving total momentum from an initial state of zero.
- **Firearm Recoil:** Gunpowder combustion exerts equal and opposite impulses on bullet and barrel.
- **Dock Jumping:** Jumping forward pushes the boat backward.

### When Does the Law of Conservation of Momentum NOT Apply?

The Law of Conservation of Momentum holds strictly **only when the net external force acting on the system is zero**. 

If a significant external force acts over time, system momentum will change:
- A soccer ball rolling across grass gradually slows down and halts on its own. Momentum is not conserved for the ball alone because **external friction from the ground acts continuously** upon it.
- In bumper cars, collisions occur over fractions of a second, during which internal collision forces are massive (hundreds of newtons) compared to negligible floor friction, making conservation an exceptionally accurate model during the impact.

---

## Common Pitfalls to Avoid

1. **Mistake 1: Ignoring vector signs in head-on collisions.**  
   In Example 3, writing $3(4) + 5(2) = 22$ leads to $v = 2.75\text{ m/s}$. The correct equation requires $-2\text{ m/s}$, giving $12 - 10 = 2\text{ kg}\cdot\text{m/s}$ and $v = 0.25\text{ m/s}$.

2. **Mistake 2: Using weight (in newtons) instead of mass (in kilograms).**  
   Momentum is $p = mv$. Never insert a weight of $20\text{ N}$ into $m$.

3. **Mistake 3: Adding scalar speeds instead of momenta.**  
   Never add velocities together; always sum the **products of mass and velocity ($mv$)**.

4. **Mistake 4: Applying conservation when strong external forces are present.**  
   A ball coming to rest due to continuous floor friction does not violate physics; it simply reflects the presence of an unbalanced external force.

5. **Mistake 5: Assigning separate final velocities when bodies stick together.**  
   When objects coalesce, they share a single final velocity $v$ with combined mass $(m_1 + m_2)$.

6. **Mistake 6: Unit inconsistency.**  
   Always convert grams to kilograms ($20\text{ g} = 0.02\text{ kg}$) before performing calculations.

---

## Quick Recap

- In an isolated system (net external force = 0), the total momentum before an interaction equals the total momentum after:  
  $$m_1 u_1 + m_2 u_2 = m_1 v_1 + m_2 v_2$$
- The law derives directly from Newton's Second Law ($F\Delta t = \Delta p$) and Third Law ($F_1 = -F_2$).
- Always establish a directional sign convention: rightward is positive ($+$), leftward is negative ($-$).
- For bodies sticking together: $m_1 u_1 + m_2 u_2 = (m_1 + m_2)v$.
- Recoil occurs because forward projectile momentum must be balanced by backward firearm momentum, keeping total momentum at zero.
- Heavier firearms or cannons recoil with much lower velocity than lighter ones.
- In collisions between unequal masses, the lighter vehicle experiences a far greater change in velocity than the heavier vehicle.

---

## Practice Questions

1. A $4\text{ kg}$ cart rolling at $3\text{ m/s}$ collides with a stationary $2\text{ kg}$ cart, and they lock together. Find their common velocity.

2. A $6\text{ kg}$ cart moving at $+2\text{ m/s}$ and a $4\text{ kg}$ cart moving at $-3\text{ m/s}$ collide head-on and stick together. Determine their final velocity.

3. A hunting rifle of mass $10\text{ kg}$ fires a bullet of mass $0.05\text{ kg}$ with a muzzle velocity of $400\text{ m/s}$. Calculate the recoil velocity of the rifle.

4. A $60\text{ kg}$ athlete sprints at $5\text{ m/s}$ and leaps onto a stationary $40\text{ kg}$ skateboard cart. Find the speed of the cart with the athlete aboard.

5. A spring-loaded toy rifle of mass $2\text{ kg}$ launches a plastic pellet of mass $0.01\text{ kg}$ at $500\text{ m/s}$. Find the recoil velocity of the toy rifle.

6. An object of mass $2\text{ kg}$ moving at $+6\text{ m/s}$ strikes a stationary object of mass $4\text{ kg}$ and comes to a complete standstill. Find the final velocity of the $4\text{ kg}$ object.

7. A $6\text{ kg}$ firework shell at rest detonates into two fragments of mass $4\text{ kg}$ and $2\text{ kg}$. The $4\text{ kg}$ fragment flies rightward at $+3\text{ m/s}$. Find the velocity of the $2\text{ kg}$ fragment.

8. A $2\text{ kg}$ cart traveling at $5\text{ m/s}$ collides with a stationary cart and locks with it. Their shared post-collision speed is $2\text{ m/s}$. Find the mass of the second cart.

9. State whether each statement is True or False, giving a scientific reason:  
   (a) In a collision on a smooth horizontal floor, the total momentum of two carts remains constant.  
   (b) In a collision, the momentum of each individual cart remains constant.  
   (c) A heavier rifle firing the same bullet at the same muzzle velocity will recoil less violently than a light rifle.  

10. A soccer ball rolling across a grass field slows down and stops without colliding with any other object. Does this observation violate the Law of Conservation of Momentum? Explain clearly.

### Answers

1. Initial: $p_i = (4 \times 3) + (2 \times 0) = 12\text{ kg}\cdot\text{m/s}$.  
   Final: $(4 + 2)v = 6v$.  
   $v = \frac{12}{6} = \mathbf{2\text{ m/s}}$ forward.  
   **Check:** $6 \times 2 = 12$ ✅

2. Initial: $p_i = [6 \times (+2)] + [4 \times (-3)] = 12 - 12 = \mathbf{0\text{ kg}\cdot m/s}$.  
   Final: $(6 + 4)v = 10v = 0 \implies \mathbf{v = 0}$ (both carts grind to a complete dead halt!).  
   **Check:** $10 \times 0 = 0$ ✅

3. Bullet momentum: $p_{\text{bullet}} = 0.05\text{ kg} \times 400\text{ m/s} = +20\text{ kg}\cdot\text{m/s}$.  
   Rifle: $10\text{ kg} \times v_{\text{rifle}} = -20\text{ kg}\cdot\text{m/s} \implies \mathbf{v_{\text{rifle}} = -2\text{ m/s}}$ ($2\text{ m/s}$ backward).  
   **Check:** $+20 + [10 \times (-2)] = 0$ ✅

4. Initial: $p_i = (60 \times 5) + (40 \times 0) = 300\text{ kg}\cdot\text{m/s}$.  
   Final: $(60 + 40)v = 100v$.  
   $v = \frac{300}{100} = \mathbf{3\text{ m/s}}$.  
   **Check:** $100 \times 3 = 300$ ✅

5. Pellet: $p_{\text{pellet}} = 0.01\text{ kg} \times 500\text{ m/s} = +5\text{ kg}\cdot\text{m/s}$.  
   Rifle: $2\text{ kg} \times v = -5\text{ kg}\cdot\text{m/s} \implies \mathbf{v = -2.5\text{ m/s}}$ ($2.5\text{ m/s}$ backward).  
   **Check:** $+5 + [2 \times (-2.5)] = 0$ ✅

6. Initial: $p_i = (2 \times 6) + (4 \times 0) = 12\text{ kg}\cdot\text{m/s}$.  
   Final: $(2 \times 0) + 4v = 4v$.  
   $v = \frac{12}{4} = \mathbf{+3\text{ m/s}}$ forward.  
   **Check:** $4 \times 3 = 12$ ✅

7. Initial: $p_i = 0$.  
   Final: $(4 \times 3) + 2v = 0 \implies 12 + 2v = 0 \implies \mathbf{v = -6\text{ m/s}}$ (to the left).  
   **Check:** $+12 + [2 \times (-6)] = 0$ ✅

8. Initial: $p_i = 2 \times 5 = 10\text{ kg}\cdot\text{m/s}$.  
   Final: $(2 + m) \times 2 = 10 \implies 2 + m = 5 \implies \mathbf{m = 3\text{ kg}}$.  
   **Check:** $(2 + 3) \times 2 = 10$ ✅

9.  
   (a) **True** ✅ (On a smooth floor, external friction is negligible; internal forces conserve total momentum).  
   (b) **False** ❌ (Individual momenta change as momentum transfers from one body to the other; only the total remains constant).  
   (c) **True** ✅ ($v_{\text{recoil}} = -p_{\text{bullet}} / m_{\text{rifle}}$; larger mass reduces recoil velocity).

10. **No, it does not violate the law.** Conservation of momentum applies strictly to **isolated systems with zero net external force**. The rolling ball experiences a continuous external frictional force from the grass and air drag that opposes its motion.

---

# Chapter Wrap-up: Force and Laws of Motion

| Topic | Key Concepts Learned | Most Important Takeaway |
|---|---|---|
| **1. What is Force?** | A push or a pull capable of altering speed, direction, or shape; SI unit is the newton (N) | Force cannot be seen directly; we observe its physical effects |
| **2. Balanced and Unbalanced Forces** | Balanced forces produce $\Sigma F = 0$ (no acceleration); unbalanced forces cause acceleration | Net resultant force governs dynamic change |
| **3. Newton's First Law and Inertia** | A body continues in its state of rest or uniform motion unless compelled by a net force; mass measures inertia | Greater mass implies greater inertia |
| **4. Friction** | Contact force opposing relative sliding between surfaces; static, sliding, and rolling | Typically $\text{Static (max)} \ge \text{Sliding} > \text{Rolling}$; friction is a necessary evil |
| **5. Momentum** | Vector quantity $p = mv$; change in momentum $\Delta p = m(v - u)$; directional signs | Momentum increases with both mass and velocity |
| **6. Newton's Second Law** | $F = ma$; $F = \frac{m(v - u)}{t}$; for equal force, lighter objects accelerate faster | Net force equals rate of change of momentum |
| **7. Newton's Third Law** | Equal and opposite action and reaction forces acting on different bodies | Action and reaction act on different bodies and never cancel |
| **8. Conservation of Momentum** | Total momentum before an interaction equals total momentum after in an isolated system | $m_1 u_1 + m_2 u_2 = m_1 v_1 + m_2 v_2$ |

### Key Definitions and Units

| Physical Quantity | Definition | SI Unit |
|---|---|---|
| **Force ($F$)** | An interaction that causes an object with mass to change its velocity or shape | newton ($\text{N}$) |
| **1 Newton** | The force that imparts an acceleration of $1\text{ m/s}^2$ to a mass of $1\text{ kg}$ | $\text{N} = \text{kg}\cdot\text{m/s}^2$ |
| **Net Force ($\Sigma F$)** | The vector sum of all collinear forces acting on a body | newton ($\text{N}$) |
| **Inertia** | The inherent resistance of matter to changes in its state of motion | Measured by mass ($\text{kg}$) |
| **Friction** | The parallel resistive force between contacting surfaces opposing sliding | newton ($\text{N}$) |
| **Momentum ($p$)** | The product of mass and velocity | $\text{kg}\cdot\text{m/s}$ |
| **Recoil Velocity** | The backward velocity acquired by a firearm upon discharging a projectile | $\text{m/s}$ |

### Summary of Core Formulae

| Concept | Governing Equation |
|---|---|
| **Newton's Second Law** | $$F = ma$$ |
| **Linear Momentum** | $$p = mv$$ |
| **Force as Momentum Rate** | $$F = \frac{m(v - u)}{t} = \frac{\Delta p}{t}$$ |
| **Conservation of Momentum** | $$m_1 u_1 + m_2 u_2 = m_1 v_1 + m_2 v_2$$ |
| **Inelastic Collision (Sticking)** | $$m_1 u_1 + m_2 u_2 = (m_1 + m_2)v$$ |
| **Recoil from Rest** | $$m_{\text{projectile}} v_{\text{projectile}} + m_{\text{gun}} v_{\text{recoil}} = 0$$ |

### Newton's Three Laws in a Single Sentence Each

| Law | Summary Sentence |
|---|---|
| **First Law (Inertia)** | When net external force is zero, stationary objects remain at rest and moving objects maintain constant velocity in a straight line. |
| **Second Law ($F = ma$)** | The net external force acting on an object equals its mass multiplied by its acceleration (the rate of change of momentum). |
| **Third Law (Action-Reaction)** | Whenever one body exerts a force on a second body, the second body simultaneously exerts an equal and opposite force on the first. |

---

In the next chapter, **Gravitation**, we will investigate the most universal force in the cosmos: gravity—the invisible pull that causes apples to fall from trees, keeps our feet planted on Earth, and orchestrates the grand orbits of moons, planets, and stars across the universe!
