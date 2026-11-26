# Chapter: Atoms (Part 3)

> **Class:** 12 | **Subject:** Physics
> **Previous topic:** [Atomic Spectra and the Bohr Model of Hydrogen](atoms-part2.md)

---

## Gol Rubber Band par Standing Waves aur Bohr ka Raaz!

**Rubina** ek gol rubber ring ko vibrate kara rahi thi — usne dekha ki stable (standing) wave tabhi banti hai jab poori circumference (**2π r**) par waves ki **poori ginti (1λ, 2λ, 3λ... = nλ)** exact fit ho jaaye! Agar 2.5λ ho to wave apne aap se takrakar khatam ho jaati hai!

Teacher ma'am muskurayi: "1924 mein **de Broglie** ne bilkul yahi sochkar Bohr ke sabse bade rahasya (**L = n h / 2π kyun?**) ko 2 line mein prove kar diya tha! Saath hi aaj hum Hydrogen ke **5 Spectral Series** (Lyman, Balmer, Paschen, Brackett, Pfund) bhi seekhenge!"

---

## Naye Shabd (New Words)

- **Excitation Energy:** Electron ko ground state (n = 1) se kisi upari excited state (n = 2, 3, ...) tak bhejne ke liye zaroori energy: **ΔE = E_n − E₁** (e.g., 1st excitation energy of H = −3.4 − (−13.6) = **10.2 eV**!).
- **Ionisation Energy:** Ground state (n = 1) ke electron ko atom se poori tarah bahar (n = ∞, E = 0) nikaalne ke liye zaroori energy (**+13.6 eV** for Hydrogen!).
- **Rydberg Constant (R):** Hydrogen line-spectrum formula ka constant: **R = 1.097 × 10⁷ m⁻¹**.

---

## 1. Line Spectra of Hydrogen — 5 Spectral Series & Rydberg Formula

Jab electron higher orbit **n_i** se lower orbit **n_f** par koodta hai, to emitted photon ki wavelength **λ** milti hai **Rydberg Formula** se:

**1 / λ = R ( 1 / n_f² − 1 / n_i² )**   *(ya energy shortcut: **λ(nm) = 1240 / ΔE(eV)**!)*

| Series Name | Lower Orbit (n_f) | Higher Orbits (n_i) | EM Spectrum Region |
|---|---|---|---|
| **1. Lyman Series** | **n_f = 1** | 2, 3, 4, ... | **Ultraviolet (UV)** |
| **2. Balmer Series** | **n_f = 2** | 3, 4, 5, ... | **Visible Light!** (H_α red, H_β blue-green...) |
| **3. Paschen Series** | **n_f = 3** | 4, 5, 6, ... | **Infrared (IR)** |
| **4. Brackett Series** | **n_f = 4** | 5, 6, 7, ... | **Infrared (IR)** |
| **5. Pfund Series** | **n_f = 5** | 6, 7, 8, ... | **Far Infrared (IR)** |

### Series ki Do Khaas Lines:
1. **Longest Wavelength (First line / least energy):** **n_i = n_f + 1 → n_f** (jaise Balmer H_α: **3 → 2**).
2. **Shortest Wavelength (Series Limit / max energy):** **n_i = ∞ → n_f** (jaise Balmer limit: **∞ → 2**).

### Maximum Number of Spectral Lines Emitted:
Agar Hydrogen atoms ka sample **n-th** excited level par ho, to neeche (n = 1 tak) aate waqt alag-alag jumps se kul kitni distinct spectral lines mil sakti hain?

**N_lines = n (n − 1) / 2**

*(Check: n = 4 ke liye 4 × 3 / 2 = **6 lines**: 4→3, 4→2, 4→1, 3→2, 3→1, 2→1!)*

---

## 2. de Broglie's Explanation of Bohr's 2nd Postulate (2-Line Proof!)

Bohr ne sirf maan liya tha ki **L = n h / (2π)** — unhone *kyun* nahi bataya tha!
de Broglie ne kaha: Orbit mein ghoomta electron ek **matter wave (λ = h / mv)** hai! Orbit tabhi stable hogi jab electron wave **standing wave** banaye — yaani orbit ki poori circumference **2π r** wavelength **λ** ka exact integer multiple ho:

**2π r = n λ**

Ab de Broglie relation **λ = h / (m v)** rakho:
2π r = n (h / m v)  ⟹  cross-multiply karo:

**m v r = L = n h / (2π)**  *(Bohr's 2nd Postulate PROVED!)*

### Limitations of Bohr's Model:
1. Sirf **single-electron atoms/ions** (H, He⁺, Li²⁺) ke liye hi kaam karta hai — multi-electron atoms (jaise He, O) par fail ho jaata hai!
2. Spectral lines ki **relative brightness (intensity)** aur magnetic/electric field mein lines ke tootne (**Zeeman / Stark effect**) ko nahi samjha sakta!

---

## Solved Examples

### Example 1: Balmer H_α Line & Series Limit Wavelengths
Using Hydrogen energy levels (**E_n = −13.6 / n² eV**) and **hc = 1240 eV nm**, calculate:
(a) the wavelength of the first line (**H_α: n = 3 → n = 2**) of the Balmer series, and
(b) the shortest wavelength (**series limit: n = ∞ → n = 2**) of the Balmer series.

**Hal (Solution):**
- (a) **3 → 2:** ΔE = E₃ − E₂ = −1.51 − (−3.40) = **1.89 eV**.
  **λ = 1240 / 1.89 ≈ 656 nm** (chamakdaar Red colour — visible!).
- (b) **∞ → 2:** ΔE = 0 − (−3.40) = **3.40 eV**.
  **λ_min = 1240 / 3.40 ≈ 365 nm** (UV border!).
- **Jaanch:** 1.89 × 656 ≈ 1240; 3.40 × 365 ≈ 1241 ✅.

### Example 2: Number of Spectral Lines from n = 4
A collection of Hydrogen atoms is excited to the **n = 4** state. How many different spectral lines can be emitted as they return to the ground state? How many of these lie in the **Visible (Balmer)** region?

**Hal (Solution):**
- Total spectral lines: **N = n(n − 1)/2 = 4(3)/2 = 6 lines**.
- Balmer series mein **n_f = 2** par end hone wale jumps aate hain: **4 → 2** aur **3 → 2** ⟹ **2 visible lines**!
- **Jaanch:** Lyman (4→1, 3→1, 2→1 = 3) + Balmer (4→2, 3→2 = 2) + Paschen (4→3 = 1) = 3 + 2 + 1 = 6 lines ✅.

---

## Aam Galtiyan (Common Mistakes)

1. **Longest aur Shortest wavelength ke transitions ko ulta kar dena:**
   - *Galat:* Series limit (∞ → n_f) ko longest wavelength bol dena!
   - *Sahi:* ∞ → n_f mein **energy sabse ZYADA** hoti hai ⟹ **wavelength sabse CHHOTI (shortest)** hoti hai! Longest wavelength **(n_f + 1) → n_f** se milti hai!
2. **Lyman series ko Visible region mein bol dena:**
   - *Galat:* Pehli series (Lyman) visible hoti hai!
   - *Sahi:* **Lyman (n_f = 1) = Ultraviolet (UV)**; **Balmer (n_f = 2) = Visible**; Paschen/Brackett/Pfund = **Infrared (IR)**!
3. **de Broglie standing wave mein 2πr = λ likh dena (n bhool jaana!):**
   - *Galat:* Har orbit mein 2πr = λ hota hai!
   - *Sahi:* **n-th orbit** mein **n poori wavelengths** fit hoti hain ⟹ **2π r_n = n λ**!

---

## Quick Recap

| Concept | Formula / Fact | Key Point |
|---|---|---|
| Hydrogen Spectral Series | Lyman (1, UV), Balmer (2, Visible), Paschen (3, IR), Brackett (4, IR), Pfund (5, IR) | 1/λ = R(1/n_f² − 1/n_i²); λ(nm) = 1240 / ΔE(eV) |
| Excitation & Ionisation | 1st Excitation (1→2): 10.2 eV; Ionisation (1→∞): 13.6 eV | ΔE = E_i − E_f |
| Max Spectral Lines | N = n (n − 1) / 2 | For a sample of atoms in state n |
| de Broglie Standing Wave | **2π r = n λ** ⟹ **L = n h / (2π)** | Explains why angular momentum is quantised! |

---

## Practice Questions

1. Name the five spectral series of Hydrogen and state the electromagnetic spectrum region to which each belongs.
2. Using de Broglie's hypothesis of matter waves, derive Bohr's quantisation condition for angular momentum (L = nh/2π).
3. Calculate the shortest wavelength (series limit) of the **Lyman series** (n = ∞ → n = 1) in Hydrogen (use hc = 1240 eV nm).
4. Calculate the longest wavelength (first line: n = 2 → n = 1) of the **Lyman series** in Hydrogen.
5. Hydrogen atoms in a gas are excited to the n = 5 level. Find (a) the total number of possible spectral lines emitted, and (b) how many of them belong to the Paschen series (n_f = 3).
6. What is the **ionisation energy** of a Hydrogen atom in its (a) ground state (n = 1), and (b) first excited state (n = 2)?
7. An electron in a Hydrogen atom absorbs a photon of energy 12.09 eV from the ground state. To which energy level n does it jump?
8. State two major limitations of Bohr's atomic model.
9. State whether True or False: The circumference of the 3rd Bohr orbit of Hydrogen equals exactly 3 de Broglie wavelengths of the electron in that orbit.
10. Find the ratio of the shortest wavelength of the Lyman series to the shortest wavelength of the Balmer series.

### Answers

1. **Lyman (n_f = 1):** UV; **Balmer (n_f = 2):** Visible; **Paschen (3), Brackett (4), Pfund (5):** Infrared (IR).

2. Stable orbit mein electron matter wave standing wave banati hai ⟹ **2π r = n λ**. de Broglie relation λ = h/(mv) rakhne par: 2πr = nh/(mv) ⟹ **m v r = L = n h / (2π)**!

3. Lyman limit (∞ → 1): ΔE = 0 − (−13.6) = **13.6 eV**.
   λ_min = 1240 / 13.6 ≈ **91.2 nm** (Ultraviolet!).
   Jaanch: 13.6 × 91.2 ≈ 1240 ✅.

4. Lyman first line (2 → 1): ΔE = −3.40 − (−13.6) = **10.2 eV**.
   λ_max = 1240 / 10.2 ≈ **121.6 nm** (Ultraviolet!).
   Jaanch: 10.2 × 121.6 ≈ 1240 ✅.

5. (a) Total lines: N = 5(5 − 1)/2 = 20 / 2 = **10 lines**.
   (b) Paschen (n_f = 3): jumps **5 → 3** aur **4 → 3** ⟹ **2 lines**.
   Jaanch: 5 × 4 / 2 = 10 ✅.

6. (a) Ground state (n = 1, E₁ = −13.6 eV): Ionisation energy = **+13.6 eV**.
   (b) First excited state (n = 2, E₂ = −3.4 eV): Ionisation energy = **+3.4 eV**.

7. New energy E_n = −13.6 + 12.09 = **−1.51 eV**.
   −13.6 / n² = −1.51 ⟹ n² = 9 ⟹ **n = 3**!
   Jaanch: −13.6 / 9 = −1.51 eV ✅.

8. (i) Multi-electron atoms (2 ya zyada electrons) par kaam nahi karta; (ii) Spectral lines ki relative intensities aur Zeeman/Stark splitting nahi samjha sakta.

9. **True ✅.** 2π r_n = n λ ⟹ 3rd orbit (n = 3) mein exact **3 de Broglie wavelengths** fit hoti hain!

10. Shortest λ (∞ → n_f): 1/λ = R / n_f² ⟹ **λ_min ∝ n_f²**.
    Lyman (n_f = 1) vs Balmer (n_f = 2): **λ_Lyman : λ_Balmer = 1² : 2² = 1 : 4**!
    Jaanch: 91.2 nm / 365 nm ≈ 1 / 4 ✅.

---

Ab tum Hydrogen Energy Levels, 5 Spectral Series aur de Broglie's Standing Wave Proof ko pakka master kar chuke ho!

**Agle topic mein:** Sab Kuch Mila Kar — Rutherford Scattering, Bohr Orbits, Spectral Series aur Photoelectric Effect ko ek saath jodkar tricky mixed problems solve karenge aur chapter wrap-up karenge!
