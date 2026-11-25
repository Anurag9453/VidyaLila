> **Class:** 11 | **Subject:** Physics | **Chapter 6:** System of Particles and Rotational Motion (Gehrai Mein — Advanced Level)

# System of Particles & Rotational Motion — Gehrai Mein (Advanced Level)

> **Core chapter se:** Core lessons ([Topic 1](system-of-particles-and-rotational-motion.md) se [Topic 7](system-of-particles-and-rotational-motion-part7.md)) mein humne CM, torque, MI, fixed-axis rotation, aur pure rolling cover kiye. Ab is **Gehrai Mein** section mein hum woh iconic rotational-mechanics techniques seekhenge jo hardest rigid-body problems ko aasaan bana deti hain — **Negative-Mass Cavity Method (CM & MI)**, **Minimum Friction for Pure Rolling**, **Toppling vs Slipping**, aur **Rod–Bullet Angular Momentum Conservation**!

---

## Narsingh ka Theoretical-Mechanics Research Desk

Narsingh ek rigid-body dynamics researcher hai. Uske lab mein chaar classic deep challenges hain:
1. Ek uniform disc (radius R) mein se radius R/2 ka circular chhed (cavity) kaat liya jaye — bache hue hisse ka CM aur MI bina integration ke kaise nikalein? (**Negative-Mass Superposition Trick!**)
2. Ek incline par pure rolling ke liye minimum friction coefficient μ_min kitna chahiye?
3. Rough floor par ek cube ko dhakka dene par woh pehle **phisle (slip)** ga ya **palte (topple)** ga?
4. Ek bullet aakar free ya hinged rod mein dhans jaye toh linear momentum nahi balki **hinge ke about Angular Momentum** conserve hota hai!

Chalo Narsingh ke saath in chaar elite weapons ko master karte hain!

---

## 1. Negative-Mass Cavity Method (Zero Integration!)

Agar mass M₁ wali poori symmetric body mein se mass M₂ ka cavity tukda (centre r₂ par) kaat liya jaye, toh bache hue hisse ko **(+M₁) + (-M₂)** ka superposition maano!
- **Centre of Mass:**
  ```
    r_cm = (M₁ r₁ - M₂ r₂) / (M₁ - M₂)
  ```
- **Moment of Inertia (about ANY axis O):**
  ```
    I_remaining = I_whole(about O) - I_removed(about O)
  ```
  *(Dhyan: Dono MI exact SAME axis O ke about hone chahiye — cavity ke liye Parallel Axes Theorem lagana mat bhoolna!)*

---

## 2. Minimum Friction Coefficient for Pure Rolling on an Incline

Incline (angle θ) par pure rolling mein static friction lagta hai:
f = M g sin θ - M a = M g sin θ [ 1 - 1 / (1 + K²/R²) ] = **M g sin θ / (1 + R² / K²)**

Slipping rokne ke liye f ≤ μ_s N = μ_s M g cos θ:
```
  μ_min = tan θ / ( 1 + R² / K² )
```
- **Solid Sphere** (R²/K² = 5/2): **μ_min = (2/7) tan θ**
- **Solid Disc / Cylinder** (R²/K² = 2): **μ_min = (1/3) tan θ**
- **Ring** (R²/K² = 1): **μ_min = (1/2) tan θ**

---

## 3. Toppling vs Slipping of a Cube (Side a)

Side **a**, mass **M** ka uniform cube rough floor (μ) par rakha hai. Upar se height **h** par horizontal force **F** lagaya jata hai:
- **Slipping threshold:** F_slip = **μ M g**
- **Toppling threshold** (moments about front-bottom edge; Normal shifts to front corner!):
  F_topple × h = M g (a / 2)  =>  **F_topple = M g a / (2 h)**
- **Kaun pehle hoga?** Jiska threshold **CHHOTA** ho!
  - Agar **F_topple < F_slip** (i.e. **μ > a / (2 h)**) => **Topples FIRST!**
  - Agar **F_slip < F_topple** (i.e. **μ < a / (2 h)**) => **Slips FIRST!**

---

## 4. Hinged Rod + Bullet Collision (Angular Momentum About Hinge!)

Jab bullet aakar **hinged** rod mein takrati hai, toh hinge par achanak bada impulsive reaction force lagta hai — isliye **linear momentum conserved NAHI hota**!
Par hinge se guzarne wale hinge-force ka **hinge ke about torque = 0** hota hai!
Isliye **hinge ke about Angular Momentum HAMESHA conserved rehta hai**:
```
  m v d = ( I_rod + m d² ) ω
```
(jahan d hinge se hit-point ki doori hai!)

---

## 6 Deep Solved Problems

### Problem 1: CM & MI of a Disc with an R/2 Circular Cavity

From a uniform circular disc of radius R and original mass M, a circular hole of radius R/2 is cut out such that its edge touches the centre and rim of the original disc (cavity centre at x = +R/2). Find:
(a) the new CM position,
(b) the MI of the remaining plate about the original centre O perpendicular to the disc.

**Solution:**
Area ∝ radius² => removed mass M_hole = M × (1/2)² = **M / 4**; remaining mass = **3M / 4**.
- (a) x_cm = [M(0) - (M/4)(R/2)] / (M - M/4) = (-M R / 8) / (3M / 4) = **- R / 6** (shifts left by R/6!).
- (b) I_whole(about O) = (1/2) M R².
  I_hole(about O) by Parallel Axes Theorem (d = R/2):
  I_hole = (1/2)(M/4)(R/2)² + (M/4)(R/2)² = (1/32) M R² + (1/16) M R² = (3/32) M R².
  Therefore **I_remaining = (1/2 - 3/32) M R² = (13/32) M R²**!

Jaanch:
- Jaanch: 16/32 - 3/32 = 13/32; CM shifts away from cavity to -R/6 ✅

---

### Problem 2: Minimum Friction for Pure Rolling of a Solid Cylinder

A solid cylinder is released from rest on an inclined plane of angle 37° (tan 37° = 3/4). Find the minimum coefficient of static friction μ_min required for pure rolling without slipping.

**Solution:**
For a solid cylinder, K²/R² = 1/2 => R²/K² = 2.
μ_min = tan 37° / (1 + 2) = (3/4) / 3 = **1 / 4 = 0.25**.

Jaanch:
- Jaanch: (1/3) tan 37° = (1/3)(0.75) = 0.25 ✅

---

### Problem 3: Toppling vs Slipping of a Uniform Cube

A uniform cube of mass 10 kg and side a = 2 m rests on a rough floor with μ = 0.6 (g = 10 m/s²). A horizontal force F is gradually increased at the top edge (h = 2 m). Will the cube slip first or topple first, and at what force?

**Solution:**
- Slipping threshold: F_slip = μ M g = 0.6 × 100 = **60 N**.
- Toppling threshold: F_topple = M g (a/2) / h = 100(1) / 2 = **50 N**.
Since 50 N < 60 N, the cube **TOPPLES FIRST at F = 50 N**!

Jaanch:
- Jaanch: Condition check: μ = 0.6 > a/(2h) = 2/4 = 0.5 => topples first ✅

---

### Problem 4: Bullet Embedding Into a Hinged Uniform Rod

A uniform rod of mass M = 3 kg and length L = 2 m hangs vertically from a smooth top hinge. A bullet of mass m = 1 kg moving horizontally at v = 10 m/s strikes and embeds into the bottom tip (d = L = 2 m). Find the angular speed ω of the rod-bullet system immediately after impact!

**Solution:**
Conserve angular momentum about the top hinge:
- L_initial = m v L = 1 × 10 × 2 = **20 kg m²/s**.
- I_total = (1/3) M L² + m L² = (1/3)(3)(4) + 1(4) = 4 + 4 = **8 kg m²**.
- 20 = 8 ω => **ω = 2.5 rad/s**.

Jaanch:
- Jaanch: Notice linear momentum is NOT conserved here because the hinge exerts a horizontal impulse! ✅

---

### Problem 5: Cue-Ball Strike Height for Instant Pure Rolling (Zero Friction!)

At what height h above the centre of a billiard ball (solid sphere, radius R) should a horizontal cue stick strike it so that it starts **pure rolling immediately** without any friction from the table?

**Solution:**
Linear impulse J gives v = J / M.
Angular impulse about CM is J h = I ω = (2/5) M R² ω.
For immediate pure rolling (v = ω R => ω = v / R = J / (M R)):
J h = (2/5) M R² [ J / (M R) ] = (2/5) J R  =>  **h = (2/5) R** above the centre (i.e. **(7/5) R** above the table)!

Jaanch:
- Jaanch: General height above CM = K² / R! For solid sphere K²/R = (2/5) R ✅

---

### Problem 6: Toppling Angle of a Cube on a Rough Inclined Plane

A uniform cube of side a rests on a rough inclined plane whose angle θ is slowly increased. Find the angle θ at which the cube topples (assuming friction is large enough to prevent slipping).

**Solution:**
Toppling begins when the vertical plumb line through the cube's CM (at height a/2, distance a/2 from lower edge) passes right through the lower edge!
tan θ = (a / 2) / (a / 2) = 1 => **θ = 45°**!
(If μ < 1, it slips first at tan θ = μ < 1; if μ > 1, it topples first at 45°!)

Jaanch:
- Jaanch: For a rectangle of base b and height h: topples at tan θ = b / h; for a cube b = h = a => tan θ = 1 (45°) ✅

---

## 3 Advanced Mistakes

### Galti 1: Cavity ka MI nikalte waqt Parallel Axes shift bhool jana
- **Galat:** Disc with R/2 hole ke liye I_hole = (1/2)(M/4)(R/2)² = (1/32) MR² seedha ghata dena!
- **Sahi:** Woh (1/32) MR² hole ke **apne centre** ke about hai! Original centre O ke about **+(M/4)(R/2)²** add karke **(3/32) MR²** ghatana padta hai!

### Galti 2: Hinged rod + bullet collision mein linear momentum conserve kar dena
- **Galat:** m v = (M + m) v_cm!
- **Sahi:** Hinge par impulsive external reaction lagta hai! Sirf **hinge ke about Angular Momentum** conserved hota hai!

### Galti 3: Pure rolling on incline par friction ko hamesha μ_s M g cos θ rakh dena
- **Galat:** f = μ_s M g cos θ se acceleration nikala!
- **Sahi:** Pure rolling mein friction **static** hai (self-adjusting: **f = M g sin θ / (1 + R²/K²)**), sirf limiting case mein μ_s M g cos θ ke barabar hota hai!

---

## Practice Questions (Advanced)

*(Take g = 10 m/s² unless stated otherwise.)*

### Question 1
From a uniform circular disc of radius 12 cm, a circular hole of radius 6 cm is cut out with its centre 6 cm from the centre of the disc. How far does the CM of the remaining part shift from the original centre?

**Solution:**
Shift = R / 6 = 12 / 6 = **2 cm** (away from the hole).

Jaanch:
- Jaanch: (M/4)(6) / (3M/4) = 6 / 3 = 2 cm ✅

---

### Question 2
Find the minimum coefficient of static friction μ_min for a solid sphere to roll without slipping down a 45° inclined plane.

**Solution:**
μ_min = (2/7) tan 45° = **2 / 7 ≈ 0.286**.

Jaanch:
- Jaanch: tan θ / (1 + 5/2) = 1 / (7/2) = 2/7 ✅

---

### Question 3
A uniform cube of side 1 m and mass 5 kg rests on a rough floor with μ = 0.4. A horizontal force is applied at its top edge (h = 1 m). Does it slip first or topple first?

**Solution:**
F_slip = 0.4 × 50 = 20 N; F_topple = 50(0.5) / 1 = 25 N.
Since 20 N < 25 N, it **slips first at 20 N**.

Jaanch:
- Jaanch: μ = 0.4 < a/(2h) = 0.5 => slips first ✅

---

### Question 4
At what height above the centre should a horizontal impulse hit a thin **ring** (radius R) so that it immediately begins pure rolling without friction?

**Solution:**
Height above CM = K² / R = R² / R = **R** (i.e., right at the **topmost point** of the ring!).

Jaanch:
- Jaanch: J R = (M R²) ω => ω = J/(MR) = v/R ✅

---

### Question 5
A uniform rod of mass 6 kg and length 1 m hangs from a top hinge. A 1 kg putty ball moving horizontally at 15 m/s hits and sticks to the midpoint (d = 0.5 m) of the rod. Find the angular velocity ω just after impact.

**Solution:**
- L_i = 1 × 15 × 0.5 = 7.5 kg m²/s.
- I_total = (1/3)(6)(1²) + 1(0.25) = 2 + 0.25 = 2.25 kg m².
- ω = 7.5 / 2.25 = **10 / 3 ≈ 3.33 rad/s**.

Jaanch:
- Jaanch: 2.25 × (10/3) = 7.5 kg m²/s ✅

---

### Question 6
Find the minimum friction coefficient μ_min for a thin ring to roll without slipping down a 37° incline (tan 37° = 3/4).

**Solution:**
μ_min = (1/2) tan 37° = (1/2)(3/4) = **3 / 8 = 0.375**.

Jaanch:
- Jaanch: Ring requires more friction than disc (0.25) or sphere (3/14 ≈ 0.214) ✅

---

### Question 7
A rectangular block of base 2 m and height 4 m rests on a very rough incline (no slipping). At what angle θ of the incline will it topple?

**Solution:**
tan θ = base / height = 2 / 4 = **0.5** (θ ≈ **26.6°**).

Jaanch:
- Jaanch: Taller, narrower block topples at a smaller angle than a cube (45°) ✅

---

### Question 8
A solid sphere of mass M and radius R has a spherical cavity of radius R/2 cut out with its centre at distance R/2 from the sphere's centre. Find the shift of the CM.

**Solution:**
Volume ∝ R³ => cavity mass M_c = M (1/2)³ = **M / 8**; remaining mass = **7M / 8**.
Shift = [(M/8)(R/2)] / (7M/8) = **R / 14** (away from cavity).

Jaanch:
- Jaanch: 3D sphere cavity has mass M/8 (vs 2D disc M/4), so smaller shift R/14 ✅

---

### Question 9
A solid cylinder of mass M and radius R is placed on a rough floor (μ_k = 0.2) with initial linear velocity v₀ = 6 m/s and ZERO angular velocity (pure sliding!). Find the time t when pure rolling starts (g = 10 m/s²).

**Solution:**
Kinetic friction f_k = μ_k M g decelerates CM (a = -μ_k g) and spins up the cylinder (α = f_k R / I = 2 μ_k g / R):
- v(t) = v₀ - μ_k g t
- ω(t) R = 2 μ_k g t
Pure rolling begins when v(t) = ω(t) R:
v₀ - μ_k g t = 2 μ_k g t => 3 μ_k g t = v₀ => **t = v₀ / (3 μ_k g)** = 6 / (3 × 0.2 × 10) = 6 / 6 = **1.0 s**!

Jaanch:
- Jaanch: At t = 1 s: v = 6 - 2 = 4 m/s; ω R = 2(2)(1) = 4 m/s (exact match! v_final = (2/3) v₀) ✅

---

### Question 10
A uniform square plate of mass M and side a has a smaller square of side a/2 cut out from one corner (centre of cut square at (+a/4, +a/4) from original centre). Find the coordinates of the new CM.

**Solution:**
Cut mass = M / 4; remaining mass = 3M / 4.
x_cm = -(M/4)(a/4) / (3M/4) = **-a / 12**; y_cm = **-a / 12**.

Jaanch:
- Jaanch: Symmetry gives x_cm = y_cm = -a/12 ✅

---

### Question 11
For a disc of radius R rolling without slipping at speed v, find the instantaneous distance of the topmost point from the Instantaneous Axis of Rotation (IAOR) and use it to verify v_top = 2v.

**Solution:**
The IAOR is the bottom contact point (where v = 0)!
Distance of topmost point from IAOR = diameter = **2 R**.
Therefore v_top = ω × (2 R) = 2 (ω R) = **2 v**!

Jaanch:
- Jaanch: Any point at distance r_IAOR from bottom has speed v = ω r_IAOR ✅

---

### Question 12
A solid sphere rolls without slipping down a rough incline of angle θ. If the incline is instead made completely frictionless (μ = 0), how does the sphere's acceleration down the plane change?

**Solution:**
- Rough (pure rolling): a_roll = (5/7) g sin θ ≈ 0.714 g sin θ.
- Smooth (pure sliding, no torque => no rotation!): a_slide = **g sin θ** (FASTER than rolling!).

Jaanch:
- Jaanch: Without friction, no energy goes into rotation, so all PE becomes translational KE => faster! ✅

---

Shabaash! Tumne Rotational Motion ko cavity superposition, minimum rolling friction, toppling, aur IAOR tak conquer kar liya hai. Wapas chapter overview ke liye [Mixed Problems & Chapter Wrap-up](system-of-particles-and-rotational-motion-part7.md) dekho!
