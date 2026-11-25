# Chapter: Structure of Atom (Part 2)

> **Class:** 11 | **Subject:** Chemistry
> **Ye file [structure-of-atom.md](structure-of-atom.md) se aage chalti hai** (wahan humne Thomson ke e/m, Millikan ke oil-drop charge, Chadwick ke neutron aur Rutherford ke model ki Maxwell-stability rukawat dekhi thi). Chapter ki shuruaat: [structure-of-atom.md](structure-of-atom.md). Recall ke liye: Class 9 mein Bohr shells (K, L, M, N) ka parichay [structure-of-the-atom-part3.md](../../../class9/chemistry/structure-of-the-atom/structure-of-the-atom-part3.md) mein padh chuke ho.
> **Topics covered in this file:**
> 2. Dual Nature of Radiation, Photoelectric Effect, Atomic Spectra aur Bohr Model of Hydrogen

---

# Topic 2: Dual Nature of Radiation, Photoelectric Effect, Atomic Spectra aur Bohr Model of Hydrogen

Topic 1 ke ant mein hum ek badi uljhan par ruke the: Rutherford ka atom stability aur hydrogen ke patle line spectrum ko nahi samjha paaya. Is paheli ki chaabi **roshni (electromagnetic radiation)** ke andar chhupi thi! 1900 mein Max Planck aur 1905 mein Albert Einstein ne dikhaya ki light sirf ek lagatar lehar (wave) nahi, balki energy ke chhote-chhote packets (**photons**) ki dhaar bhi hai. Isi quantum idea ko lekar 1913 mein Niels Bohr ne hydrogen atom ka exact mathematical model banaya. Aaj hum wave equations, photoelectric effect, hydrogen spectral series aur Bohr ke exact radius tatha energy formulas seekhenge!

---

## Nilay aur library ke automatic photocell par laal banaam neeli torch

Nilay library ke automatic sliding door ke paas khada tha aur science club ke liye teacher ma'am ke saath ek chhota photocell sensor demo dekh raha tha *(sirf teacher demo; tez UV ya laser kabhi aankh par nahi daalte)*. Teacher ma'am ne sensor par ek **bahut tez laal LED torch** daali — meter ki sui bilkul nahi hili!

Nilay chaunk gaya: "Ma'am, laal torch itni tez hai, phir bhi ek bhi electron bahar nahi nikla?" Ab ma'am ne ek **halki si violet-blue LED** daali — aur turant meter ki sui upar chadh gayi!

Ma'am muskurayin: "Yahi hai **Photoelectric Effect**, Nilay! Agar roshni sirf ek wave hoti, to tez laal roshni ko zyada energy dekar electrons nikaal dene chahiye the. Par roshni **photons** (energy ke packets) mein aati hai: har laal photon mein itni energy hi nahi thi ki metal se electron khinch sake, jabki ek halka violet photon bhi us minimum shart (**threshold frequency**) ko paar kar gaya!" Chalo, is poori quantum kahani aur Bohr model ko ganit ke saath samajhte hain.

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Wavenumber (ν̄)** | Prati unit lambai (1 metre ya 1 cm) mein poori wavelengths ki sankhya: ν̄ = 1 ÷ λ | λ = 580 nm ke liye ν̄ = 1.72 × 10⁶ m⁻¹ |
| **Quantum / Photon** | Electromagnetic radiation ki energy ka sabse chhota packet: E = hν = hc ÷ λ | Violet photon ki energy laal photon se zyada hoti hai |
| **Photoelectric effect** | Kisi metal surface par paryapt frequency ki light padne par turant electrons ka bahar nikalna | Potassium ya Caesium par blue/UV light padna |
| **Threshold frequency (ν₀)** | Wo minimum frequency jisse kam par light kitni bhi tez kyun na ho, ek bhi photoelectron nahi nikalta | Har metal ki apni alag ν₀ hoti hai |
| **Work function (W₀)** | Metal surface se ek electron ko theek bahar nikaalne ke liye zaroori minimum energy: W₀ = hν₀ | Potassium ke liye lagbhag 2.30 eV |
| **Line (atomic) spectrum** | Garam gas dwara chhode gaye sirf kuch khaas wavelengths ki chamakdar patli lakeerein | Hydrogen ki Balmer series (visible rang) |

---

## Part A: Wave Nature, Planck's Quantum Theory aur Photoelectric Effect

### 1. Wave ke Teen Rishte
Sabhi electromagnetic waves (radio se gamma tak) vacuum mein ek hi speed **c = 3.00 × 10⁸ m/s** se chalti hain:
- **c = ν × λ** (ν = frequency Hz mein, λ = wavelength metre mein; yaad rakho **1 nm = 10⁻⁹ m**, **1 Å = 10⁻¹⁰ m**, **1 pm = 10⁻¹² m**)
- **Wavenumber:** ν̄ = 1 ÷ λ (unit: m⁻¹ ya cm⁻¹)

### Electromagnetic Spectrum (Badhti Wavelength λ / Ghatti Frequency ν ka Kram)

| Region | Approximate Wavelength (λ) | Khaas Upyog / Pehchaan |
|---|---|---|
| **Gamma (γ) rays** | < 10⁻¹¹ m | Sabse zyada energy & frequency (nuclear decay) |
| **X-rays** | 10⁻¹¹ – 10⁻⁸ m | Haddi (bone) scan, crystal structure |
| **Ultraviolet (UV)** | 10 – 400 nm | Hydrogen ki Lyman series; skin burn (ozone rokta hai) |
| **Visible (VIBGYOR)** | **400 – 700 nm** | Aankh se dikhne wale rang (Violet 400 nm → Red 700 nm); Balmer series |
| **Infrared (IR)** | 700 nm – 1 mm | Heat radiation, TV remote; Paschen/Brackett/Pfund series |
| **Microwaves & Radio** | 1 mm se kayi km tak | Microwave oven, FM radio, mobile signals (sabse kam energy) |

*(Black-Body Radiation aur Planck ka Quantum: Ek ideal black body har frequency ki light absorb aur emit karti hai. Garam karne par uska peak wavelength chhote λ ki taraf khisakta hai — laal → peela → safed → neela! Classical wave theory ke hisaab se chhote λ par intensity infinite honi chahiye thi, jo galat tha. Max Planck ne **E = n hν** (quantised packets) maankar ise poori tarah solve kar diya!)*

### 2. Planck ka Quantum (1900) aur Einstein ka Photoelectric Equation (1905)
Black-body radiation (garam lohe ka laal → peela → safed hona) aur photoelectric effect wave theory se nahi samjhe ja sake. **Max Planck** ne kaha ki energy lagatar nahi, balki chhote packets (**quanta**) mein milti hai:
- **E = h × ν = (h × c) ÷ λ**, jahan **h = 6.626 × 10⁻³⁴ J·s** (Planck's constant).
- **1 eV = 1.602 × 10⁻¹⁹ J** (atomic energy ke liye chhoti suvidhajanak unit).

**Einstein** ne samjhaya ki jab ek photon (energy = hν) metal ke ek electron se takraata hai:
- Agar **hν < W₀** (ya ν < ν₀) → **koi electron nahi niklega**, chahe light kitni bhi tez (high intensity) kyun na ho!
- Agar **hν ≥ W₀** → W₀ energy electron ko metal se aazaad karne mein lagti hai, aur bachi hui energy electron ki **maximum kinetic energy (KE_max)** ban jaati hai:

**hν = W₀ + KE_max**   ya   **KE_max = hν − hν₀ = ½ m_e v²**

- **Intensity badhane par** (ek hi frequency par zyada photons aane par) → **electrons ki GINTI (photocurrent) badhti hai**, par har electron ki KE_max **nahi badhti**!
- **Frequency (ν) badhane par** → har photon zyada energy laata hai → **KE_max seedha badhti hai**!

### Example 1. Yellow Sodium Lamp ka Frequency, Wavenumber aur Photon Energy

**Sawaal:** Streetlight ke yellow sodium lamp ki wavelength **λ = 580 nm** hai. Iski (a) frequency ν, (b) wavenumber ν̄, aur (c) ek photon ki energy Joules aur eV mein nikaalo.

**Hal:**
- λ = 580 nm = **5.80 × 10⁻⁷ m**.
- (a) ν = c ÷ λ = (3.00 × 10⁸) ÷ (5.80 × 10⁻⁷) = **5.17 × 10¹⁴ Hz**.
- (b) ν̄ = 1 ÷ λ = 1 ÷ (5.80 × 10⁻⁷) = **1.72 × 10⁶ m⁻¹**.
- (c) E = h × ν = (6.626 × 10⁻³⁴) × (5.172 × 10¹⁴) = **3.43 × 10⁻¹⁹ J**.
  - eV mein: E = (3.427 × 10⁻¹⁹) ÷ (1.602 × 10⁻¹⁹) = **2.14 eV**.

**Jaanch:** ν × λ = (5.172 × 10¹⁴) × (5.80 × 10⁻⁷) = 3.00 × 10⁸ m/s = c ✅.

---

### Example 2. Potassium Metal par Photoelectric Effect *(sirf padhne ke liye; K metal paani/hawa ke saath tez reaction karta hai)*

**Sawaal:** Potassium (K) ka work function **W₀ = 2.30 eV** hai. Agar is par **4.00 eV** energy ke photons girein, to nikalne wale photoelectrons ki maximum kinetic energy (KE_max) eV aur Joules mein nikaalo.

**Hal:**
- KE_max = E_photon − W₀ = 4.00 − 2.30 = **1.70 eV**.
- Joules mein: KE_max = 1.70 × 1.602 × 10⁻¹⁹ = **2.72 × 10⁻¹⁹ J**.

**Jaanch:** W₀ + KE_max = 2.30 + 1.70 = 4.00 eV = incident photon energy ✅.

---

## Part B: Hydrogen ka Line Spectrum aur Bohr Model of Hydrogen (1913)

Jab hydrogen gas mein electric discharge diya jaata hai *(sirf padhne ke liye)*, to prism se dekhne par lagatar indradhanush nahi, balki kuch khaas wavelengths ki **sharp bright lines** dikhti hain — jinhein **Rydberg formula** (1890) ek hi equation mein bandh deta hai:

**ν̄ = 1 / λ = R_H × (1 / n₁² − 1 / n₂²)**, jahan **R_H = 1.097 × 10⁷ m⁻¹** aur n₂ > n₁.

| Series ka Naam | Nichla Level (n₁) | Upar se Koodna (n₂) | Electromagnetic Region |
|---|---|---|---|
| **Lyman** | 1 | 2, 3, 4, ... | Ultraviolet (UV) |
| **Balmer** | 2 | 3, 4, 5, ... | **Visible (aankh se dikhne wale rang!)** |
| **Paschen** | 3 | 4, 5, 6, ... | Infrared (IR) |
| **Brackett** | 4 | 5, 6, 7, ... | Infrared (IR) |
| **Pfund** | 5 | 6, 7, 8, ... | Infrared (IR) |

### Niels Bohr (1913) ne Hydrogen ke 3 Raaz Kaise Khole:
1. **Stationary Orbits:** Electron sirf kuch khaas circular orbits (n = 1, 2, 3...) mein bina energy khoye ghoom sakta hai.
2. **Angular Momentum Quantisation:** Sirf wahi orbits allowed hain jahan **m_e v r = n × (h / 2π)** (n = 1, 2, 3...).
3. **Photon Emission / Absorption:** Jab electron upar wale orbit (n₂) se neeche wale orbit (n₁) mein koodta hai, to energy ka antar ek **photon** bankar nikalta hai: **ΔE = E₂ − E₁ = hν**.

### Bohr ke Do Sabse Zaroori Formulas (Hydrogen aur H-like 1-electron ions He⁺, Li²⁺ ke liye!)
- **nth Orbit ka Radius:** **rₙ = 52.9 × (n² / Z) pm** *(H ke liye Z = 1, r₁ = a₀ = 52.9 pm = 0.529 Å)*
- **nth Orbit ki Energy:** **Eₙ = −2.18 × 10⁻¹⁸ × (Z² / n²) J**  ya  **Eₙ = −13.6 × (Z² / n²) eV**
  *(Negative sign ka matlab kya hai? Jab electron nucleus se infinite door (n = ∞) hota hai, to E_∞ = 0. Nucleus ke paas aane par electron bandh jaata hai aur energy bahar nikal jaati hai — isliye bound electron ki energy **negative** hoti hai!)*

```
   n = ∞  ----------------------------  E =  0.00 eV  (Free electron)
   n = 4  ----------------------------  E = -0.85 eV
   n = 3  ----------------------------  E = -1.51 eV
                  :  (Balmer H_α: 3 -> 2, ΔE = 1.89 eV, Red 657 nm)
                  v
   n = 2  ----------------------------  E = -3.40 eV
                  :  (Lyman: 2 -> 1, ΔE = 10.20 eV, UV 122 nm)
                  v
   n = 1  ----------------------------  E = -13.60 eV (Ground state)
```

> **Figure 2.1** – Hydrogen atom ke Bohr energy levels (Eₙ = −13.6 / n² eV). Jaise-jaise n badhta hai, energy levels ek doosre ke paas aate jaate hain aur E = 0 ke kareeb pahunchte hain.

### Example 3. Hydrogen ka Balmer Transition (n = 3 → n = 2) aur He⁺ Ion

**Sawaal:**
(a) Hydrogen atom (Z = 1) mein n = 2 ka radius r₂, energy E₂ aur **n = 3 → n = 2** transition se nikalne wale photon ki energy (eV mein) aur wavelength (nm mein) nikaalo.
(b) **He⁺ ion** (Z = 2, ek-electron species) ke ground state (n = 1) ki energy E₁ aur radius r₁ nikaalo.

**Hal:**
- (a) Hydrogen (Z = 1):
  - r₂ = 52.9 × (2² / 1) = 52.9 × 4 = **211.6 pm**.
  - E₂ = −13.6 ÷ 2² = **−3.40 eV**; E₃ = −13.6 ÷ 3² = **−1.51 eV**.
  - ΔE = E₃ − E₂ = (−1.51) − (−3.40) = **1.89 eV** = 1.89 × 1.602 × 10⁻¹⁹ = 3.028 × 10⁻¹⁹ J.
  - λ = (h × c) ÷ ΔE = (6.626 × 10⁻³⁴ × 3.00 × 10⁸) ÷ (3.028 × 10⁻¹⁹) = 6.57 × 10⁻⁷ m = **657 nm** (chamakdar laal rang — Balmer H_α line!).
- (b) He⁺ (Z = 2, n = 1):
  - E₁ = −13.6 × (2² / 1²) = −13.6 × 4 = **−54.4 eV**.
  - r₁ = 52.9 × (1² / 2) = **26.45 pm** (nucleus mein 2 protons hone se electron aur kas kar andar khincha!).

**Jaanch:** 1.89 eV, visible light (1.65–3.1 eV) ke andar hai aur laal rang ~656–657 nm par aata hai ✅. He⁺ ka r₁ = a₀/2 = 26.45 pm aur E₁ = 4 × (−13.6) = −54.4 eV ✅.

### Do Extra Bohr & Spectrum Shortcuts (Exam-Ready!)
1. **nth Orbit mein Electron ki Speed:** **vₙ = 2.18 × 10⁶ × (Z / n) m/s** *(yaani Hydrogen ke n = 1 mein electron ~c/137 speed se ghoomta hai!)*
2. **Maximum Spectral Lines Count:** Jab ek sample mein electrons level **n** se ground state (**1**) par alag-alag koodon mein wapas aate hain, to kul alag-alag spectral lines = **n(n − 1) ÷ 2**! *(Kisi bhi n₂ se n₁ tak: (n₂ − n₁)(n₂ − n₁ + 1) ÷ 2.)*

### Example 4. Maximum Spectral Lines aur Threshold Wavelength (λ₀)

**Sawaal:**
(a) Hydrogen atoms ke ek bade sample mein electrons **n = 5** state mein excited hain. Ground state (**n = 1**) tak laut-te waqt adhiktam kitni **alag spectral lines** ban sakti hain, aur unmein se kitni **visible (Balmer)** hongi?
(b) Ek metal ka work function **W₀ = 3.10 eV** hai. Uski **threshold wavelength (λ₀)** nm mein nikaalo.

**Hal:**
- (a) Total spectral lines = n(n − 1) ÷ 2 = 5 × 4 ÷ 2 = **10 lines**!
  - Balmer series (jo n = 2 par rukti hain): 5 → 2, 4 → 2, 3 → 2 = **3 visible lines**!
- (b) W₀ = 3.10 eV = 3.10 × 1.602 × 10⁻¹⁹ = **4.966 × 10⁻¹⁹ J**.
  - λ₀ = (h × c) ÷ W₀ = (6.626 × 10⁻³⁴ × 3.00 × 10⁸) ÷ (4.966 × 10⁻¹⁹) = 4.00 × 10⁻⁷ m = **400 nm**!
  - *(Matlab: 400 nm ya usse CHHOTI wavelength par hi photoelectrons niklenge!)*

**Jaanch:** 5 → 1 ke 10 jumps: Lyman (4) + Balmer (3) + Paschen (2) + Brackett (1) = 10 ✅; 400 nm photon = 3.10 eV ✅.

### Bohr Model ki Seemayein (Kyun Humein Aage Badhna Pada?)
1. Ye sirf **1-electron species** (H, He⁺, Li²⁺) par chalta hai — Helium (2 electrons) ya usse bade atoms ke spectra nahi samjha sakta!
2. Magnetic field mein spectral lines ka tootna (**Zeeman effect**) aur electric field mein tootna (**Stark effect**) nahi samjha paaya.
3. Atoms aapas mein judkar molecules (chemical bonds) kaise banate hain, is par chup hai — aur agle topic ke **de Broglie aur Heisenberg** niyamon ke khilaaf jaata hai!

---

## Aam galtiyan (bachke rehna)

1. **Galti 1: "Zyada tez (bright) light daalne par photoelectron zyada speed (KE_max) se niklega" likh dena.**
   Intensity badhane se sirf photons ki **ginti** badhti hai, har photon ki energy (hν) nahi! Isliye intensity badhane par **electrons ki sankhya (current)** badhti hai, par KE_max sirf **frequency (ν)** badhane par badhti hai.

2. **Galti 2: λ ko nm mein hi rakh kar c = νλ laga dena.**
   580 nm ko seedha 3.00 × 10⁸ ÷ 580 karne par 5.17 × 10⁵ Hz galat jawab aayega (10⁹ guna chhota!). Hamesha **nm → × 10⁻⁹ m** mein badlo!

3. **Galti 3: He⁺ ya Li²⁺ mein Z² aur Z bhool jaana.**
   Eₙ mein **Z²** upar aata hai (He⁺ mein 4×, Li²⁺ mein 9×) jabki rₙ mein **Z** neeche aata hai (He⁺ mein aadha, Li²⁺ mein ek-tihai!).

---

## Quick Recap

- **Wave:** c = νλ, ν̄ = 1/λ (c = 3.00 × 10⁸ m/s).
- **Photon:** E = hν = hc/λ (h = 6.626 × 10⁻³⁴ J·s; 1 eV = 1.602 × 10⁻¹⁹ J).
- **Photoelectric Effect:** KE_max = hν − W₀ (ν ≥ ν₀ zaroori; intensity → number of e⁻, frequency → KE_max).
- **H Spectrum:** Lyman (n₁ = 1, UV), Balmer (n₁ = 2, Visible), Paschen/Brackett/Pfund (IR).
- **Bohr Model (1-electron species):** rₙ = 52.9 n²/Z pm; Eₙ = −13.6 Z²/n² eV = −2.18 × 10⁻¹⁸ Z²/n² J.

---

## Practice Questions

1. A radio station broadcasts at a frequency of **100 MHz** (100 × 10⁶ Hz). Calculate the wavelength (λ) of this radio wave in metres.
2. Violet light has a wavelength of **400 nm**. Calculate (a) its frequency ν, (b) its wavenumber ν̄, and (c) the energy of one photon in both Joules and eV.
3. Caesium (Cs) metal (paper problem only; Cs reacts violently with air/water) has a work function **W₀ = 2.10 eV**.
   (a) If photons of energy **3.60 eV** strike a Cs surface, what is the maximum kinetic energy of the ejected electrons in eV and Joules?
   (b) What happens if photons of energy **1.80 eV** of very high intensity strike the same surface?
4. In a hydrogen atom (Z = 1), an electron jumps from **n = 4 to n = 2** (the blue-green Balmer H_β line). Calculate the energy of the emitted photon in eV and its wavelength in nm.
5. Calculate the energy (in eV) and wavelength (in nm) of the first line of the **Lyman series** of hydrogen (**n = 2 → n = 1**). Which region of the electromagnetic spectrum does it belong to?
6. For the hydrogen-like ion **Li²⁺ (Z = 3)**, calculate (a) the energy E₁ of the ground state (n = 1) in eV, and (b) the radius r₁ of the first orbit in pm.
7. What is the **ionisation energy** (energy needed to remove the electron to n = ∞) of a hydrogen atom starting from (a) the ground state n = 1, and (b) the first excited state n = 2?
8. Explain why the energy of a bound electron in Bohr's model has a **negative sign**, and what E = 0 physically represents.
9. Name any **three limitations** of Bohr's atomic model.
10. State whether each statement is True or False, and correct the false ones:
    (a) Increasing the intensity of light (above threshold frequency) increases the maximum kinetic energy of emitted photoelectrons.
    (b) All spectral lines of the Balmer series of hydrogen lie in the ultraviolet region.
    (c) Bohr's model accurately predicts the line spectrum of the He⁺ ion because He⁺ has only one electron.
    (d) As n increases in the hydrogen atom, the energy gap between adjacent orbits gets smaller and smaller.
11. If electrons in a large sample of hydrogen atoms are excited to the **n = 6** level, how many maximum spectral lines can be emitted as they return to the ground state (**n = 1**)? How many of these belong to the **Paschen series** (ending at n = 3)?
12. Calculate the speed of an electron in the **n = 2** orbit of a hydrogen atom (Z = 1) using **vₙ = 2.18 × 10⁶ × (Z / n) m/s**, and compare it with the speed in the n = 1 orbit of **He⁺ (Z = 2)**.

### Answers

1. λ = c ÷ ν = (3.00 × 10⁸ m/s) ÷ (1.00 × 10⁸ s⁻¹) = **3.00 m**.
   Jaanch: 3.00 m × 1.00 × 10⁸ Hz = 3.00 × 10⁸ m/s = c ✅.

2. λ = 400 nm = 4.00 × 10⁻⁷ m.
   (a) ν = (3.00 × 10⁸) ÷ (4.00 × 10⁻⁷) = **7.50 × 10¹⁴ Hz**.
   (b) ν̄ = 1 ÷ (4.00 × 10⁻⁷) = **2.50 × 10⁶ m⁻¹**.
   (c) E = (6.626 × 10⁻³⁴) × (7.50 × 10¹⁴) = **4.97 × 10⁻¹⁹ J**; eV mein = 4.9695 ÷ 1.602 = **3.10 eV**.
   Jaanch: 7.50 × 10¹⁴ × 4.00 × 10⁻⁷ = 3.00 × 10⁸ m/s ✅.

3. (a) KE_max = 3.60 − 2.10 = **1.50 eV** = 1.50 × 1.602 × 10⁻¹⁹ = **2.40 × 10⁻¹⁹ J**.
   (b) 1.80 eV < W₀ (2.10 eV), isliye **ek bhi electron bahar nahi niklega**, chahe intensity kitni bhi zyada ho!
   Jaanch: 2.10 + 1.50 = 3.60 eV ✅.

4. E₄ = −13.6 ÷ 16 = −0.85 eV; E₂ = −13.6 ÷ 4 = −3.40 eV.
   ΔE = (−0.85) − (−3.40) = **2.55 eV** = 2.55 × 1.602 × 10⁻¹⁹ = 4.085 × 10⁻¹⁹ J.
   λ = (6.626 × 10⁻³⁴ × 3.00 × 10⁸) ÷ (4.085 × 10⁻¹⁹) = 4.866 × 10⁻⁷ m = **487 nm** (neela-hara rang).
   Jaanch: 487 nm visible spectrum (400–700 nm) mein hai ✅.

5. E₂ = −3.40 eV; E₁ = −13.60 eV → ΔE = (−3.40) − (−13.60) = **10.20 eV** = 1.634 × 10⁻¹⁸ J.
   λ = (6.626 × 10⁻³⁴ × 3.00 × 10⁸) ÷ (1.634 × 10⁻¹⁸) = 1.216 × 10⁻⁷ m = **121.6 nm**. Ye **Ultraviolet (UV)** region mein aati hai.
   Jaanch: 121.6 nm < 400 nm (UV region) ✅.

6. Li²⁺ (Z = 3, n = 1):
   (a) E₁ = −13.6 × (3² / 1²) = −13.6 × 9 = **−122.4 eV**.
   (b) r₁ = 52.9 × (1² / 3) = **17.63 pm**.
   Jaanch: 17.63 × 3 = 52.89 ≈ 52.9 pm ✅.

7. Ionisation energy = E_∞ − Eₙ = 0 − Eₙ:
   (a) n = 1 se: 0 − (−13.60) = **+13.60 eV**.
   (b) n = 2 se: 0 − (−3.40) = **+3.40 eV**.
   Jaanch: 13.60 ÷ 4 = 3.40 eV ✅.

8. Jab electron nucleus se anant doori (n = ∞) par free hota hai, to uski energy 0 maani jaati hai. Nucleus ke aakarshan se bandhte waqt electron energy bahar chhodta hai, isliye bound electron ki energy 0 se kam yaani **negative** hoti hai.

9. Teen seemayein: (1) Multi-electron atoms (He, Li, C...) ke spectra nahi samjha paata; (2) Zeeman effect (magnetic field mein splitting) aur Stark effect (electric field mein splitting) nahi samjha paata; (3) Chemical bonding ki vyakhya nahi karta aur de Broglie/Heisenberg niyamon se mel nahi khaata.

10. (a) **False** ❌. Intensity badhane se photoelectrons ki **ginti (current)** badhti hai; KE_max sirf frequency badhane par badhti hai.
    (b) **False** ❌. Balmer series **visible** region mein hoti hai (Lyman series UV mein hoti hai).
    (c) **True** ✅. He⁺ mein sirf 1 electron hai (Z = 2), isliye Bohr model is par bilkul sahi chalta hai.
    (d) **True** ✅. E₂ − E₁ = 10.2 eV, jabki E₃ − E₂ = 1.89 eV aur E₄ − E₃ = 0.66 eV (lagatar chhota hota jaata hai).

11. Total spectral lines (n = 6 → 1) = 6 × 5 ÷ 2 = **15 lines**.
    Paschen series (n = 3 par rukne wali): 6 → 3, 5 → 3, 4 → 3 = **3 lines** (Infrared region).
    Jaanch: 5 (Lyman) + 4 (Balmer) + 3 (Paschen) + 2 (Brackett) + 1 (Pfund) = 15 ✅.

12. H (Z = 1, n = 2): v₂ = 2.18 × 10⁶ × (1/2) = **1.09 × 10⁶ m/s**.
    He⁺ (Z = 2, n = 1): v₁ = 2.18 × 10⁶ × (2/1) = **4.36 × 10⁶ m/s** (H ke n = 2 se **4 guna tez**!).
    Jaanch: 4.36 ÷ 1.09 = 4.00 ✅.

---

Ab tum light ke dual nature, photoelectric effect aur Bohr ke quantized hydrogen orbits ka poora ganit pakad chuke ho!

**Aage kya?** Light mein wave aur particle dono ke gun nikle — par 1924 mein ek French scientist **Louis de Broglie** ne ek chaunkane wala sawaal poocha: *agar roshni mein particle ke gun hain, to kya chalte hue electron (matter) mein bhi **wave** ke gun hote hain?* Agle topic (**Topic 3**) mein hum **de Broglie Matter Waves aur Heisenberg Uncertainty Principle** seekhenge!
