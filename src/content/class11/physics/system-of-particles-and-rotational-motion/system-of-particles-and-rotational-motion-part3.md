> **Class:** 11 | **Subject:** Physics | **Chapter 6:** System of Particles and Rotational Motion (Part 3)

# Equilibrium of a Rigid Body, Principle of Moments & Couples

> **Pichle topic se:** [Torque & Angular Momentum](system-of-particles-and-rotational-motion-part2.md) mein humne seekha ki net force linear acceleration deta hai aur net torque rotational acceleration deta hai. Toh ek rigid body poori tarah **Equilibrium** mein kab hogi? Jab **DONO** zero hon!

---

## Yaduvir ka Bridge-Truss & Leaning-Ladder Inspection

Yaduvir ek structural inspector hai. Ek **6 m** lamba uniform metal plank (mass **20 kg**) do pillars A aur B par tika hai. Jab ek **40 kg** technician pillar A se sirf **1.5 m** door khada hota hai, toh dono pillars par barabar load nahi padta — paas wale pillar A par **400 N** aur door wale pillar B par sirf **200 N** load padta hai!

Yaduvir ne **Principle of Moments** lagaya aur 10 second mein dono reactions calculate kar liye! Chalo rigid-body equilibrium aur couples ka yeh practical engineering tool seekhte hain.

---

## Naye Shabd (Key Terms)

| Shabd | Matlab (Simple Hinglish) |
|---|---|
| Mechanical Equilibrium | Rigid body mein **Translational (ΣF = 0)** AUR **Rotational (Στ = 0)** dono equilibrium ek saath hona |
| Principle of Moments | Rotational equilibrium mein: **Sum of Anticlockwise Moments = Sum of Clockwise Moments** |
| Couple | Do equal, opposite, aur parallel forces jo alag-alag lines par lage hon (ΣF = 0, par pure rotation torque = **F × d**!) |
| Centre of Gravity (CG) | Woh point jahan body ka poora weight mg lagta hua maana ja sakta hai (uniform gravity mein **CG = CM**!) |

---

## 1. Conditions for Complete Equilibrium of a Rigid Body

1. **Translational Equilibrium:** **ΣF_x = 0, ΣF_y = 0, ΣF_z = 0** (CM accelerate nahi karega).
2. **Rotational Equilibrium:** **Στ = 0** about **ANY** chosen pivot point!

**Pro Tip:** Pivot hamesha us point par choose karo jahan se **unknown force** guzarta ho — kyunki us unknown force ka torque 0 ho jayega aur equation 1 line mein solve ho jayegi!

---

## 2. Couple (Pure Rotation Without Translation!)

Car ka steering wheel ghumate waqt ek haath upar (+F) aur doosra neeche (-F) lagata hai:
- Net Force: **F + (-F) = 0** (steering wheel apni jagah se nahi hilta!).
- Net Torque (Moment of Couple): **τ = F × d** (jahan d dono forces ke beech ki perpendicular distance hai — aur yeh **pivot ki choice se bilkul independent** hota hai!).

---

## Solved Examples

### Example 1: Yaduvir's Bridge Plank (Two Support Pillars)

A uniform 6 m long plank of mass 20 kg rests horizontally on two supports A (at x = 0) and B (at x = 6 m). A 40 kg technician stands at x = 1.5 m from A (g = 10 m/s²). Find the Normal reactions N_A and N_B at the two supports.

**Solution:**
- Plank weight = 200 N at its midpoint x = 3 m; Technician weight = 400 N at x = 1.5 m.
- **Translational equilibrium:** N_A + N_B = 200 + 400 = **600 N**.
- **Rotational equilibrium about A (N_A has zero torque!):**
  Anticlockwise (N_B) = Clockwise (weights):
  N_B × 6 = 400(1.5) + 200(3) = 600 + 600 = 1200 => **N_B = 200 N**.
- Therefore **N_A = 600 - 200 = 400 N**.

Jaanch:
- Jaanch: Check moments about B: N_A(6) = 400(4.5) + 200(3) = 1800 + 600 = 2400 => N_A = 400 N ✅

---

### Example 2: Car Steering Wheel Couple

A driver applies two equal opposite tangential forces of 25 N each on opposite sides of a steering wheel of diameter 40 cm (0.40 m). Find the torque of the couple.

**Solution:**
d = 0.40 m => τ = F × d = 25 × 0.40 = **10 N m**.

Jaanch:
- Jaanch: About centre: 25(0.20) + 25(0.20) = 5 + 5 = 10 N m ✅

---

### Example 3: Uniform Metre Scale Balanced Off-Centre

A uniform metre scale (length 100 cm) balances horizontally on a knife-edge at the 40 cm mark when a 50 g mass is hung from the 10 cm mark. Find the mass M of the metre scale.

**Solution:**
Scale's CG is at its midpoint (**50 cm** mark, i.e., 10 cm to the right of pivot 40 cm).
50 g mass is at 10 cm mark (30 cm to the left of pivot 40 cm).
Anticlockwise moment = Clockwise moment:
50 × 30 = M × 10 => 1500 = 10 M => **M = 150 g**.

Jaanch:
- Jaanch: 50 × 30 = 1500 = 150 × 10 ✅

---

### Example 4: Leaning Ladder Against a Smooth Wall

A uniform ladder of mass 20 kg and length 5 m rests against a **smooth** vertical wall with its foot 3 m from the wall on a rough horizontal floor (g = 10 m/s²). Find the Normal reaction N_wall from the wall and the friction f from the floor.

**Solution:**
Height of wall contact = √(5² - 3²) = **4 m**.
Ladder weight W = 200 N acts at horizontal midpoint = **1.5 m** from the foot.
- Vertical equilibrium: N_floor = W = **200 N**.
- Horizontal equilibrium: f = N_wall.
- **Moments about the foot of the ladder (eliminates both N_floor and f!):**
  N_wall × 4 = 200 × 1.5 = 300 => **N_wall = 75 N**.
- Therefore floor friction **f = 75 N** (requires μ_s ≥ 75/200 = 0.375!).

Jaanch:
- Jaanch: 75 × 4 = 300 = 200 × 1.5 ✅

---

## Aam Galtiyan (3 Common Mistakes)

### Galti 1: ΣF = 0 dekh kar poora equilibrium maan lena
- **Galat:** Couple mein +F aur -F ka sum 0 hai, toh wheel equilibrium mein hai!
- **Sahi:** ΣF = 0 sirf translational equilibrium deta hai — couple mein **Στ = F d ≠ 0** hai, isliye wheel ghoomta hai!

### Galti 2: Uniform rod ka apna weight (mg) uske midpoint par lagana bhool jana
- **Galat:** Plank par sirf technician ka weight 400 N le liya, plank ka apna 200 N bhool gaye!
- **Sahi:** Jab tak "light/massless" na likha ho, uniform beam ka weight hamesha uske **exact midpoint (L/2)** par lagta hai!

### Galti 3: Moments lete waqt slant distance le lena (perpendicular distance nahi!)
- **Galat:** Leaning ladder mein N_wall × 5 = 200 × 2.5 likh dena!
- **Sahi:** Moment mein hamesha **perpendicular lever arm** aata hai: N_wall ke liye vertical height **4 m** aur weight ke liye horizontal distance **1.5 m**!

---

## Quick Recap

- **Complete Equilibrium:** ΣF = 0 AND Στ = 0 (about any pivot).
- **Principle of Moments:** Anticlockwise moments = Clockwise moments.
- **Couple:** Equal opposite parallel forces => ΣF = 0, **τ = F × d** (pivot-independent!).
- **Leaning Ladder:** Take moments about the **foot** to immediately find N_wall = f.

---

## Practice Questions

*(Take g = 10 m/s² unless stated otherwise.)*

### Question 1
A 4 m long uniform beam of mass 30 kg rests on two supports at its ends. A 50 kg load is placed 1 m from the left end. Find the reactions at the left and right supports.

**Solution:**
N_L + N_R = 300 + 500 = 800 N.
Moments about left end: N_R (4) = 500(1) + 300(2) = 1100 => **N_R = 275 N**.
**N_L = 800 - 275 = 525 N**.

Jaanch:
- Jaanch: 525 + 275 = 800 N ✅

---

### Question 2
Two kids of masses 30 kg and 45 kg sit on a balanced seesaw. If the 30 kg kid sits 3 m from the fulcrum, how far from the fulcrum must the 45 kg kid sit?

**Solution:**
30 × 3 = 45 × d => 90 = 45 d => **d = 2 m**.

Jaanch:
- Jaanch: 30 × 3 = 90 = 45 × 2 ✅

---

### Question 3
A uniform metre rule balances at the 58 cm mark when a 20 g weight is hung at the 90 cm mark. Find the mass of the metre rule.

**Solution:**
Rule CG at 50 cm (8 cm left of 58 cm); 20 g at 90 cm (32 cm right of 58 cm).
M × 8 = 20 × 32 = 640 => **M = 80 g**.

Jaanch:
- Jaanch: 80 × 8 = 640 = 20 × 32 ✅

---

### Question 4
A couple of moment 15 N m is formed by two parallel forces of 30 N each. Find the perpendicular distance between the two forces.

**Solution:**
d = τ / F = 15 / 30 = **0.5 m (50 cm)**.

Jaanch:
- Jaanch: 30 × 0.5 = 15 N m ✅

---

### Question 5
A uniform 10 kg ladder of length 10 m leans against a smooth vertical wall with its foot 6 m from the wall. Find the Normal force from the wall.

**Solution:**
Wall height = √(10² - 6²) = 8 m; CG horizontal distance from foot = 3 m.
N_wall × 8 = 100 × 3 = 300 => **N_wall = 37.5 N**.

Jaanch:
- Jaanch: 37.5 × 8 = 300 ✅

---

### Question 6
In Question 5, find the minimum coefficient of static friction μ_s between the ladder and the floor so the ladder does not slip.

**Solution:**
N_floor = 100 N; required f = N_wall = 37.5 N.
μ_s(min) = f / N_floor = 37.5 / 100 = **0.375**.

Jaanch:
- Jaanch: Standard formula for uniform ladder at angle θ with floor: μ_min = 1 / (2 tan θ) = 1 / (2 × 8/6) = 6/16 = 0.375 ✅

---

### Question 7
A car of mass 1800 kg has its front and back axles 1.8 m apart. Its centre of gravity is 1.05 m behind the front axle. Find the total upward force exerted by the level ground on the front two wheels and the back two wheels.

**Solution:**
Total weight = 18,000 N.
Moments about front axle: N_back (1.8) = 18,000 (1.05) = 18,900 => **N_back = 10,500 N**.
**N_front = 18,000 - 10,500 = 7,500 N**.

Jaanch:
- Jaanch: CG is closer to back axle (0.75 m vs 1.05 m), so back wheels carry more load (10.5 kN > 7.5 kN) ✅

---

### Question 8
A uniform rod of mass 4 kg and length 2 m is hinged at one end and held horizontally by a vertical string at the other end. Find the tension in the string and the hinge reaction.

**Solution:**
By symmetry (CG at 1 m), hinge and string share the 40 N weight equally:
**T = 20 N**, **R_hinge = 20 N** (both upward).

Jaanch:
- Jaanch: Moments about hinge: T(2) = 40(1) => T = 20 N ✅

---

### Question 9
A 2 m uniform plank (mass 10 kg) overhangs a table edge by 0.6 m. What maximum mass m can be placed at the overhanging tip before the plank tips over?

**Solution:**
Pivot = table edge! Plank CG is 1.0 - 0.6 = **0.4 m** inside the table.
At tipping: m (0.6) = 10 (0.4) = 4 => **m = 4 / 0.6 = 20/3 ≈ 6.67 kg**.

Jaanch:
- Jaanch: 6.67 × 0.6 = 4.0 = 10 × 0.4 ✅

---

### Question 10
A crowbar of length 1.5 m is used to lift a 1200 N boulder placed 0.3 m from the fulcrum. Find the minimum downward effort force needed at the far end (1.2 m from fulcrum).

**Solution:**
F × 1.2 = 1200 × 0.3 = 360 => **F = 300 N**.

Jaanch:
- Jaanch: Mechanical advantage = 1.2 / 0.3 = 4 => 1200 / 4 = 300 N ✅

---

### Question 11
State whether the following statements are True or False:
(a) A body can be in translational equilibrium without being in rotational equilibrium.
(b) In uniform gravity, the centre of gravity coincides with the centre of mass.

**Solution:**
- (a) **True** ✅ — Ek couple par ΣF = 0 hota hai par Στ ≠ 0!
- (b) **True** ✅ — Jab g har jagah constant ho, CG aur CM exact same point par hote hain.

Jaanch:
- Jaanch: Steering wheel couple confirms (a) ✅

---

### Question 12
A uniform 5 kg beam of length 4 m is supported at its left end and at a point 3 m from the left end. Find the Normal reactions at both supports.

**Solution:**
N₁ + N₂ = 50 N. Weight 50 N acts at x = 2 m.
Moments about left end: N₂ (3) = 50 (2) = 100 => **N₂ = 100/3 ≈ 33.33 N**.
**N₁ = 50 - 33.33 = 50/3 ≈ 16.67 N**.

Jaanch:
- Jaanch: 16.67 + 33.33 = 50 N ✅

---

Equilibrium aur moments ab tumhare liye second nature ban chuke hain!

**Agle topic mein:** Linear motion mein jo role **Mass** nibhata hai, rotational motion mein wahi role **Moment of Inertia** nibhata hai — chalo padhte hain [Moment of Inertia, Radius of Gyration & Axes Theorems](system-of-particles-and-rotational-motion-part4.md)!
