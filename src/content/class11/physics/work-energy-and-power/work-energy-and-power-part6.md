> **Class:** 11 | **Subject:** Physics | **Chapter 5:** Work, Energy and Power (Part 6)

# Collisions: Elastic, Inelastic & Introduction to 2D

> **Pichle topic se:** [Power](work-energy-and-power-part5.md) mein humne energy transfer ka rate dekha. Ab hum momentum conservation (Chapter 4) aur kinetic energy (Chapter 5) ko ek saath mila kar **Collisions** solve karenge — jahan billiards balls se lekar nuclear reactors tak sabka physics chhupa hai!

---

## Narottam ka Billiards & Nuclear-Moderator Analysis

Narottam ek billiards-physics aur nuclear-reactor safety analyst hai. Usne dekha:
- Jab ek billiard ball doosri **equal-mass** ruki hui ball se seedhi (head-on elastic) takrati hai, toh pehli ball wahin **ruk jati hai** aur doosri exact usi speed se aage nikal jati hai — **velocities swap ho jati hain!**
- Par jab do mitti ke gole takra kar chipak jate hain (**completely inelastic**), toh momentum conserve rehta hai, par **kinetic energy ka bada hissa heat aur sound mein udd jata hai!**

---

## Naye Shabd (Key Terms)

| Shabd | Matlab (Simple Hinglish) |
|---|---|
| Elastic Collision | Momentum **AUR** Kinetic Energy dono conserved hon (coefficient of restitution **e = 1**) |
| Inelastic Collision | Momentum conserved, par Kinetic Energy ka kuch hissa heat/deformation mein loss ho (**0 < e < 1**) |
| Completely Inelastic Collision | Takkar ke baad dono bodies **chipak (stick)** kar saath chalti hain (**e = 0**, maximum KE loss!) |
| Coefficient of Restitution (e) | Relative speed of separation divided by relative speed of approach: **e = (v₂ - v₁) / (u₁ - u₂)** |
| Head-on (1D) vs Oblique (2D) | Takkar se pehle aur baad sabhi velocities ek hi line par (1D) ya alag-alag directions mein (2D) |

---

## 1. Universal Rule of Collisions

Koi bhi collision ho (elastic, inelastic, ya completely inelastic), agar external impulsive force zero ho:
- **Linear Momentum is ALWAYS conserved:** m₁ u₁ + m₂ u₂ = m₁ v₁ + m₂ v₂.
- **Kinetic Energy is conserved ONLY in Elastic Collisions (e = 1)!**

---

## 2. Head-On (1D) Elastic Collision Formulas (e = 1)

Momentum conservation + KE conservation (which simplifies to **u₁ - u₂ = v₂ - v₁**, i.e., speed of approach = speed of separation!) solve karne par milte hain:

```
  v₁ = [(m₁ - m₂) / (m₁ + m₂)] u₁  +  [2 m₂ / (m₁ + m₂)] u₂
  v₂ = [2 m₁ / (m₁ + m₂)] u₁       +  [(m₂ - m₁) / (m₁ + m₂)] u₂
```

### 3 Super-Famous Special Cases:
1. **Equal masses (m₁ = m₂):** **v₁ = u₂** aur **v₂ = u₁** (velocities bilkul **SWAP** ho jati hain!).
2. **Light body hits stationary heavy wall (m₁ << m₂, u₂ = 0):** **v₁ ≈ -u₁**, **v₂ ≈ 0** (ball same speed se rebound hoti hai!).
3. **Heavy truck hits stationary pebble (m₁ >> m₂, u₂ = 0):** **v₁ ≈ u₁**, **v₂ ≈ 2 u₁** (pebble truck ki **double** speed se udta hai!).

---

## 3. Completely Inelastic Collision (e = 0) & KE Loss

Dono bodies takra kar common velocity **v = (m₁ u₁ + m₂ u₂) / (m₁ + m₂)** se saath chalti hain.
Kinetic energy ka loss:
```
  ΔK_loss = (1/2) [ m₁ m₂ / (m₁ + m₂) ] (u₁ - u₂)²
```
*(General restitution **e** ke liye: ΔK_loss = (1/2) [m₁ m₂ / (m₁ + m₂)] (1 - e²) (u₁ - u₂)²!)*

---

## 4. Introduction to 2D (Oblique) Elastic Collision

Jab ek moving ball (mass m, speed u) kisi **stationary equal-mass ball (mass m)** ko glancing (off-centre) elastic takkar maarti hai:
- Momentum: u = v₁ + v₂ (vector triangle!)
- Kinetic Energy: u² = v₁² + v₂² (Pythagoras theorem!)
- **Magical Result:** Dono equal-mass balls takkar ke baad hamesha ek doosre se **exact 90°** angle par fly karti hain (**θ₁ + θ₂ = 90°**)!

---

## Solved Examples

### Example 1: Head-On Elastic Collision (2 kg hitting 6 kg at rest)

A 2 kg ball moving at 8 m/s makes a head-on elastic collision with a stationary 6 kg ball. Find the velocities of both balls after collision.

**Solution:**
Here m₁ = 2, m₂ = 6, u₁ = 8, u₂ = 0:
- v₁ = [(2 - 6) / (2 + 6)] × 8 = (-4 / 8) × 8 = **-4 m/s** (rebounds backward!).
- v₂ = [2(2) / (2 + 6)] × 8 = (4 / 8) × 8 = **+4 m/s** (moves forward!).

Jaanch:
- Jaanch: Momentum: 2(8) = 16; final = 2(-4) + 6(4) = -8 + 24 = 16 ✅; KE: 0.5(2)(64) = 64 J; final = 16 + 48 = 64 J ✅

---

### Example 2: Completely Inelastic Collision & Energy Loss

A 4 kg block moving at 10 m/s collides and sticks to a stationary 6 kg block on a smooth floor. Find: (a) common final velocity, (b) loss in kinetic energy.

**Solution:**
- (a) v = (4 × 10 + 0) / (4 + 6) = 40 / 10 = **4 m/s**.
- (b) K_i = (1/2)(4)(100) = 200 J; K_f = (1/2)(10)(16) = 80 J.
  Loss in KE = 200 - 80 = **120 J** (60% of initial KE lost to heat/sound!).

Jaanch:
- Jaanch: Formula check: (1/2) · [(4×6)/10] · (10²) = 0.5(2.4)(100) = 120 J ✅

---

### Example 3: Inelastic Collision with Restitution e = 0.5

A 2 kg ball moving at 10 m/s hits a stationary 2 kg ball head-on with coefficient of restitution e = 0.5. Find their velocities after collision.

**Solution:**
- Momentum conservation: 2(10) + 0 = 2 v₁ + 2 v₂  =>  **v₁ + v₂ = 10**.
- Restitution: e = (v₂ - v₁) / (10 - 0) = 0.5  =>  **v₂ - v₁ = 5**.
Adding the two equations: 2 v₂ = 15 => **v₂ = 7.5 m/s**; then **v₁ = 2.5 m/s**.

Jaanch:
- Jaanch: v₁ + v₂ = 10 (momentum conserved); (7.5 - 2.5)/10 = 0.5 = e ✅

---

### Example 4: Ballistic Pendulum (Bullet Embedded in Hanging Block)

A 0.01 kg bullet moving horizontally at 500 m/s embeds itself into a stationary 0.99 kg wooden block hanging from a long string (g = 10 m/s²). Find the maximum height h to which the block rises!

**Solution:**
**2-Stage Split (NEVER conserve KE during the hit!):**
- **Stage 1 (Collision — Momentum ONLY):**
  0.01(500) = (0.01 + 0.99) v => 5 = 1.00 v => **v = 5 m/s**.
- **Stage 2 (Swing up — Mechanical Energy Conserved!):**
  (1/2) M v² = M g h => h = v² / (2g) = 25 / 20 = **1.25 m**.

Jaanch:
- Jaanch: Initial bullet KE = 1250 J; post-hit KE = 12.5 J (99% lost as heat!); 12.5 J lifts 1 kg by 1.25 m ✅

---

## Aam Galtiyan (3 Common Mistakes)

### Galti 1: Ballistic pendulum mein initial bullet KE ko seedha M g h ke barabar kar dena
- **Galat:** (1/2) m u² = (m + M) g h!
- **Sahi:** Bullet ka block mein dhansna **completely inelastic** hai — 99% KE heat ban jati hai! Pehle **momentum conservation** se v nikalo, phir swing mein energy conserve karo!

### Galti 2: Inelastic collision mein momentum conserve nahi hota maan lena
- **Galat:** Inelastic mein KE loss hoti hai toh momentum bhi loss hoga!
- **Sahi:** External impulsive force 0 hai toh **momentum HAR collision mein 100% conserved** rehta hai!

### Galti 3: Coefficient of restitution e mein numerator ulta (v₁ - v₂) likh dena
- **Galat:** e = (v₁ - v₂) / (u₁ - u₂).
- **Sahi:** Takkar ke baad body 2 aage nikal jati hai (v₂ ≥ v₁), isliye hamesha **e = (v₂ - v₁) / (u₁ - u₂)** (separation / approach)!

---

## Quick Recap

- **Momentum:** Always conserved (when F_ext = 0).
- **Restitution:** e = (v₂ - v₁) / (u₁ - u₂); Elastic e = 1 (KE conserved); Inelastic 0 < e < 1; Completely inelastic e = 0 (stick together).
- **Equal-mass 1D elastic:** Velocities swap!
- **Equal-mass 2D elastic (target at rest):** Final velocities are at **90°**!

---

## Practice Questions

### Question 1
A 3 kg ball moving at 6 m/s makes a head-on elastic collision with another 3 kg ball moving in the opposite direction at 4 m/s. Find their velocities after collision.

**Solution:**
Equal masses in 1D elastic collision => velocities swap!
**v₁ = -4 m/s**, **v₂ = +6 m/s**.

Jaanch:
- Jaanch: Initial p = 18 - 12 = +6; final p = -12 + 18 = +6 ✅

---

### Question 2
A 5 kg body moving at 4 m/s collides and sticks to a stationary 5 kg body. Find the common velocity and the fraction of initial kinetic energy lost.

**Solution:**
- v = (5 × 4) / 10 = **2 m/s**.
- K_i = 40 J; K_f = (1/2)(10)(4) = 20 J => loss = 20 J = **50% (1/2)** of initial KE.

Jaanch:
- Jaanch: Equal masses sticking together always lose exactly 50% of KE ✅

---

### Question 3
A ball is dropped from a height H = 16 m onto a hard horizontal floor with coefficient of restitution e = 0.5. To what height h does it rebound after the first bounce?

**Solution:**
Impact speed u = √(2gH); rebound speed v = e u => h = v² / (2g) = **e² H**.
h = (0.5)² × 16 = 0.25 × 16 = **4 m**.

Jaanch:
- Jaanch: Speed halves => height becomes one-fourth (16 / 4 = 4 m) ✅

---

### Question 4
A 1 kg ball moving at 12 m/s hits a stationary 3 kg ball head-on elastically. Find the velocity of the 3 kg ball after collision.

**Solution:**
v₂ = [2 m₁ / (m₁ + m₂)] u₁ = [2(1) / 4] × 12 = **6 m/s**.

Jaanch:
- Jaanch: v₁ = [(1 - 3)/4] × 12 = -6 m/s; check e = (6 - (-6))/12 = 1 ✅

---

### Question 5
A 2 kg ball moving at 10 m/s collides head-on with a 3 kg ball moving in the same direction at 5 m/s. If e = 0.4, find their velocities after collision.

**Solution:**
- Momentum: 2(10) + 3(5) = 35 => 2 v₁ + 3 v₂ = 35.
- Restitution: (v₂ - v₁) / (10 - 5) = 0.4 => v₂ - v₁ = 2 => v₂ = v₁ + 2.
Substitute: 2 v₁ + 3(v₁ + 2) = 35 => 5 v₁ = 29 => **v₁ = 5.8 m/s**, **v₂ = 7.8 m/s**.

Jaanch:
- Jaanch: 2(5.8) + 3(7.8) = 11.6 + 23.4 = 35; (7.8 - 5.8)/5 = 0.4 ✅

---

### Question 6
A neutron (mass m) moving at speed u collides head-on elastically with a stationary carbon nucleus (mass 12 m). What fraction of the neutron's kinetic energy is transferred to the carbon nucleus?

**Solution:**
v₂ = [2 m / (13 m)] u = (2/13) u.
K₂ / K₁ = [(1/2)(12 m)(4/169) u²] / [(1/2) m u²] = **48 / 169 ≈ 28.4%**.

Jaanch:
- Jaanch: General fraction transferred = 4 m₁ m₂ / (m₁ + m₂)² = 4(1)(12) / 13² = 48 / 169 ✅

---

### Question 7
A billiard ball moving at 10 m/s strikes an identical stationary billiard ball obliquely in an elastic collision. If the first ball moves off at 37° to its original direction, at what angle to the original direction does the second ball move?

**Solution:**
Equal-mass 2D elastic collision with target at rest => θ₁ + θ₂ = 90°!
θ₂ = 90° - 37° = **53°** (on the opposite side of the original line).

Jaanch:
- Jaanch: 37° + 53° = 90° ✅

---

### Question 8
A heavy truck moving at 20 m/s hits a tiny stationary marble elastically head-on. What is the approximate speed of the marble immediately after the collision?

**Solution:**
For m₁ >> m₂ and u₂ = 0: v₂ ≈ 2 u₁ = 2 × 20 = **40 m/s**.

Jaanch:
- Jaanch: Relative speed of separation = 40 - 20 = 20 = approach speed ✅

---

### Question 9
A 0.02 kg bullet travelling at 300 m/s embeds into a stationary 0.98 kg wooden block on a smooth horizontal floor. Find the speed of the block-bullet system and the heat produced.

**Solution:**
- v = (0.02 × 300) / (0.02 + 0.98) = 6 / 1 = **6 m/s**.
- K_i = (1/2)(0.02)(90,000) = 900 J; K_f = (1/2)(1)(36) = 18 J.
- Heat produced = 900 - 18 = **882 J**.

Jaanch:
- Jaanch: 900 - 18 = 882 J (98% lost as heat!) ✅

---

### Question 10
A ball moving at 8 m/s collides elastically head-on with a stationary ball of mass m₂ and rebounds with speed 4 m/s. Find the ratio m₂ / m₁.

**Solution:**
v₁ = [(m₁ - m₂) / (m₁ + m₂)] u₁ => -4 = [(m₁ - m₂) / (m₁ + m₂)] (8)
=> (m₁ - m₂) / (m₁ + m₂) = -1/2 => 2 m₁ - 2 m₂ = -m₁ - m₂ => 3 m₁ = m₂ => **m₂ / m₁ = 3**.

Jaanch:
- Jaanch: Check with m₁ = 1, m₂ = 3: v₁ = (1 - 3)/4 × 8 = -4 m/s ✅

---

### Question 11
State whether the following statements are True or False:
(a) In a perfectly inelastic collision, the final kinetic energy of the system is always zero.
(b) Coefficient of restitution e = 1 for a perfectly elastic collision.

**Solution:**
- (a) **False** ❌ — Agar initial total momentum non-zero hai, toh dono bodies chipak kar common velocity v ≠ 0 se chalti rehti hain, so K_f > 0! (Sirf jab initial p = 0 ho tab K_f = 0 hota hai.)
- (b) **True** ✅ — Elastic collision mein separation speed = approach speed => e = 1.

Jaanch:
- Jaanch: Example 2 mein completely inelastic ke baad bhi K_f = 80 J ≠ 0 tha ✅

---

### Question 12
A 2 kg block moving at 6 m/s collides head-on with a 4 kg block moving in the same direction at 3 m/s. If they stick together, find the loss in kinetic energy.

**Solution:**
ΔK_loss = (1/2) [m₁ m₂ / (m₁ + m₂)] (u₁ - u₂)² = (1/2) [8 / 6] (6 - 3)² = (2/3) × 9 = **6 J**.

Jaanch:
- Jaanch: v = (12 + 12)/6 = 4 m/s; K_i = 36 + 18 = 54 J; K_f = 0.5(6)(16) = 48 J; loss = 54 - 48 = 6 J ✅

---

Collisions ka poora toolkit ab tumhari mutthi mein hai!

**Agle topic mein:** Chapter ke sabhi concepts — dot product, Work–Energy Theorem, PE, Conservation of Energy, Power, aur Collisions — ko ek saath mila kar solve karenge [Mixed Problems & Chapter Wrap-up](work-energy-and-power-part7.md) mein!
