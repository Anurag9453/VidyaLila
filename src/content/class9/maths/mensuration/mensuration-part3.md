# Chapter: Mensuration (Part 3)

> **Class:** 9 | **Subject:** Mathematics
> **Ye file [mensuration-part2.md](mensuration-part2.md) se aage chalti hai.** (Topic 1: [mensuration.md](mensuration.md))
> **Topics covered in this file:**
> 3. Cube aur Cuboid: Surface Area aur Volume

---

# Topic 3: Cube aur Cuboid: Surface Area aur Volume

Topic 1 aur 2 mein humne **flat (sapaat) shapes** ka area nikala. Pehle triangle ka area, jab height na pata ho tab bhi, Heron's formula se (Sameer ka 13-14-15 wala traffic island). Phir quadrilateral ka area, use ek diagonal se do triangles mein tod kar (Nisha ka kitchen garden aur Verma sir ka hilne wala frame). Ye sab shapes kaagaz par bichhi hui thin: inme sirf lambai aur chaudai thi.

Ab hum kaagaz se uth kar **asli duniya ki cheezon** par aate hain, jinme ek teesri cheez bhi hoti hai: **unchai (height)**. Dabba, eent, kamra, paani ki tanki: ye sab **3D (teen dimension wale) solids** hain. Is topic mein hum sabse aasan do solids se shuru karenge: **cuboid** aur **cube**.

---

## Simran ka gift box

Simran apne chhote bhai ke birthday ke liye ek gatte ka dabba laayi. Dabba **20 cm lamba, 10 cm chauda aur 5 cm ooncha** hai. Ab uske saamne do sawaal hain:

1. **Dabbe ko rangeen kaagaz se poora dhakne ke liye kitna kaagaz lagega?**
2. **Dabbe mein kitni toffiyan aayengi?**

Dono sawaal ek hi dabbe ke baare mein hain, par dono bilkul alag cheez naap rahe hain.

- Pehla sawaal dabbe ki **bahar ki satah (surface)** ke baare mein hai. Kaagaz sirf bahar chipakta hai, andar nahi jaata. Ye hai **surface area**.
- Doosra sawaal dabbe ke **andar ki jagah** ke baare mein hai. Toffiyan andar bharti hain. Ye hai **volume (aayatan)**.

Is topic ke end tak aap dono ka jawab nikal loge. (Spoiler: kaagaz **700 cm²** lagega, aur agar har toffee 2 cm × 1 cm × 1 cm ki ho, to **500 toffiyan** aayengi.)

---

## Naye shabd

| Shabd | Matlab (simple bhasha mein) | Example |
|---|---|---|
| **Solid (3D shape)** | Aisi cheez jisme lambai, chaudai aur unchai teeno hon | Dabba, eent, ball |
| **Cuboid** | Dabbe jaisa solid jiske saare 6 face rectangle hon | Matchbox, eent, almirah |
| **Cube** | Aisa cuboid jiski lambai, chaudai, unchai teeno barabar hon | Ludo ka paasa, barf ka tukda |
| **Face** | Solid ki ek sapaat satah | Dabbe ka dhakkan |
| **Edge (kinara)** | Jahan do faces milte hain, wo line | Dabbe ka kona-line |
| **Vertex (kona)** | Jahan kinare milte hain, wo point | Dabbe ka nukila kona |
| **Surface Area** | Bahar ki saari satah ka kul area | Dabba dhakne ka kaagaz |
| **Lateral Surface Area (LSA)** | Sirf "deewaron" ka area: upar aur neeche ko chhod kar | Kamre ki chaar deewarein |
| **Total Surface Area (TSA)** | Saare faces ka area, upar-neeche milakar | Poora dabba dhakna |
| **Volume** | Andar kitni jagah hai | Tanki mein kitna paani |
| **Capacity** | Kisi bartan mein kitna liquid aa sakta hai (litre mein) | Tanki ki capacity 3000 L |

---

## Part A: Surface Area aur Volume mein farak

Simran ki kahani yaad rakho: **kaagaz vs toffiyan**.

| | Surface Area | Volume |
|---|---|---|
| Kya naapta hai | Bahar ki satah | Andar ki jagah |
| Socho jaise | Wrapping paper | Bharne wala saamaan |
| Unit | **cm², m²** (square units) | **cm³, m³** (cubic units) |
| Chhota unit | 1 cm × 1 cm ka square tile | 1 cm × 1 cm × 1 cm ka chhota cube |

**Unit ka farak kyun?** Area mein do lambaiyan guna hoti hain (cm × cm = cm²). Volume mein teen lambaiyan guna hoti hain (cm × cm × cm = cm³). Isliye area ke peeche chhota "2" aur volume ke peeche chhota "3" aata hai.

### Litre ka rishta

Paani, doodh, petrol jaise liquids ko hum litre mein naapte hain. Ye do rishte yaad rakho:

- **1 litre = 1000 cm³.** Socho 10 cm × 10 cm × 10 cm ka ek dabba. Uska volume 1000 cm³ hai, aur usme theek 1 litre paani aata hai.
- **1 m³ = 1000 litre.** Kyunki 1 m = 100 cm, to 1 m³ = 100 × 100 × 100 = 10,00,000 cm³. Isko 1000 se bhaag do (har litre 1000 cm³), to 1000 litre.

Aur ek kaam ka rishta: **1 m² = 100 × 100 = 10,000 cm².**

---

## Part B: Faces, Edges aur Vertices

Koi bhi dabba ya matchbox haath mein lo aur gino.

| Solid | Faces | Edges | Vertices |
|---|---|---|---|
| Cuboid | 6 | 12 | 8 |
| Cube | 6 | 12 | 8 |

Cube aur cuboid ki ginti same hai. Farak sirf itna hai ki cube ke saare faces **barabar squares** hote hain, jabki cuboid ke faces rectangles hote hain.

> Ek mazedaar jaanch (extra): Faces + Vertices − Edges = 6 + 8 − 12 = **2**. Ye "2" bahut saare solids ke liye sach hota hai. Ise Euler ka formula kehte hain.

### Cuboid ka "net" (khula hua dabba)

Agar ek gatte ke dabbe ko kinaron se kaat kar zameen par bichha do, to aisa dikhega:

```
               +---------+
               |   Top   |
               |  (l×b)  |
     +---------+---------+---------+---------+
     |  Left   |  Front  |  Right  |  Back   |
     |  (b×h)  |  (l×h)  |  (b×h)  |  (l×h)  |
     +---------+---------+---------+---------+
               | Bottom  |
               |  (l×b)  |
               +---------+
```

Dekho, **6 rectangles** hain, aur wo **teen jodiyon** mein aate hain:
- Top aur Bottom: dono **l × b**
- Front aur Back: dono **l × h**
- Left aur Right: dono **b × h**

Yahi baat surface area ka formula banati hai.

---

## Part C: Cuboid

Maan lo cuboid ki **lambai = l, chaudai = b, unchai = h**.

### Total Surface Area (TSA)

Upar net mein teen jodiyan dekhin. Har jodi mein do barabar faces hain. To:

**TSA = 2(lb + bh + hl)**

### Lateral Surface Area (LSA): sirf chaar deewarein

Socho tum ek kamre ke andar khade ho. Chaar deewarein tumhare chaaron taraf hain, chhat upar hai, farsh neeche. Agar sirf **deewaron** ko paint karna ho, to chhat aur farsh nahi ginte.

Chaar deewarein: do **l × h** ki aur do **b × h** ki.
LSA = 2lh + 2bh = **2h(l + b)**

Yaad rakhne ka tareeka: **2(l + b)** farsh ka perimeter hai (chaaron taraf ek chakkar). Usko unchai h se guna karo, to deewaron ka area mil gaya. Jaise ek lambi patti (perimeter jitni lambi, h jitni oonchi) kamre ke chaaron taraf lapet di ho.

### Volume

Cuboid ke andar kitne 1 cm × 1 cm × 1 cm ke chhote cube aayenge?
- Farsh par ek parat (layer) mein: l × b cube
- Aisi h parat upar-upar

**Volume = l × b × h**

### Example 1: Ek simple cuboid

Ek cuboid 8 cm × 6 cm × 4 cm ka hai. TSA, LSA aur volume nikalo.

- lb = 8 × 6 = 48, bh = 6 × 4 = 24, hl = 4 × 8 = 32
- **TSA** = 2(48 + 24 + 32) = 2 × 104 = **208 cm²**
- **LSA** = 2 × 4 × (8 + 6) = 8 × 14 = **112 cm²**
- **Volume** = 8 × 6 × 4 = **192 cm³**

**Jaanch:** LSA = TSA − (top + bottom) = 208 − 2 × 48 = 208 − 96 = 112 ✅

### Example 2: Simran ka gift box (story ka jawab)

Dabba 20 cm × 10 cm × 5 cm.

- **Kaagaz (TSA)** = 2(20 × 10 + 10 × 5 + 5 × 20) = 2(200 + 50 + 100) = 2 × 350 = **700 cm²**
- **Volume** = 20 × 10 × 5 = **1000 cm³**
- Ek toffee = 2 × 1 × 1 = 2 cm³. Toffiyan = 1000 ÷ 2 = **500**

**Jaanch (fit hoti hain ya nahi):** Lambai mein 20 ÷ 2 = 10, chaudai mein 10 ÷ 1 = 10, unchai mein 5 ÷ 1 = 5. Kul 10 × 10 × 5 = 500 ✅ (Har taraf poori-poori fit ho rahi hain, kuch jagah bekar nahi.)

### Example 3: Kamre ki painting

Ek kamra 5 m lamba, 4 m chauda aur 3 m ooncha hai. Chaar deewarein aur chhat paint karni hain. Kamre mein ek darwaza (2 m × 1 m) aur ek khidki (1.5 m × 1 m) hai jinpe paint nahi hoga. Paint ka kharcha ₹25 per m² hai. Kul kharcha kitna?

- Chaar deewarein (LSA) = 2 × 3 × (5 + 4) = 6 × 9 = 54 m²
- Chhat = 5 × 4 = 20 m²
- Kul = 54 + 20 = 74 m²
- Darwaza + khidki = 2 × 1 + 1.5 × 1 = 2 + 1.5 = 3.5 m²
- Paint hone wala area = 74 − 3.5 = **70.5 m²**
- Kharcha = 70.5 × 25 = **₹1762.50**

**Jaanch:** 70 × 25 = 1750, aur 0.5 × 25 = 12.5. Kul 1762.5 ✅

Dhyan do: farsh paint nahi hua, isliye farsh ka area nahi joda.

### Example 4: Bina dhakkan ka dabba

Ek khula dabba (upar dhakkan nahi hai) 30 cm × 20 cm × 10 cm ka banana hai. Kitna gatta lagega?

Saare 6 faces mein se **top** nahi chahiye.
- TSA = 2(30 × 20 + 20 × 10 + 10 × 30) = 2(600 + 200 + 300) = 2200 cm²
- Top = 30 × 20 = 600 cm²
- Gatta = 2200 − 600 = **1600 cm²**

**Jaanch (doosre tareeke se):** Bottom + chaar deewarein = 600 + 2 × 10 × (30 + 20) = 600 + 1000 = 1600 ✅

### Example 5: Chhat par paani ki tanki

Ek tanki andar se 2 m lambi, 1.5 m chaudi aur 1 m oonchi hai. Isme kitne litre paani aayega? Agar ghar mein roz 500 litre paani lagta ho, to bhari tanki kitne din chalegi?

- Volume = 2 × 1.5 × 1 = 3 m³
- 1 m³ = 1000 L, to capacity = 3 × 1000 = **3000 litre**
- Din = 3000 ÷ 500 = **6 din**

### Example 6: Deewar mein kitni eentein

Ek deewar 10 m lambi, 30 cm moti aur 2 m oonchi banani hai. Har eent 20 cm × 10 cm × 7.5 cm ki hai. Kitni eentein lagengi? (Cement ki jagah ko abhi ignore karo.)

**Pehle sab ek unit mein lao.** Sab metre mein:
- Deewar = 10 m × 0.3 m × 2 m = **6 m³**
- Eent = 0.2 m × 0.1 m × 0.075 m = **0.0015 m³**
- Eentein = 6 ÷ 0.0015 = **4000**

**Jaanch (cm mein):** Deewar = 1000 × 30 × 200 = 60,00,000 cm³. Eent = 20 × 10 × 7.5 = 1500 cm³. 60,00,000 ÷ 1500 = 4000 ✅

### Example 7: Gayab naap nikalna

Ek cuboid dabbe ka volume 360 cm³ hai, lambai 10 cm aur chaudai 6 cm hai. Unchai kitni hai?

- 10 × 6 × h = 360
- 60h = 360
- h = **6 cm**

**Jaanch:** 10 × 6 × 6 = 360 ✅

### Extra: Cuboid ka diagonal

Cuboid ke ek kone se bilkul ulte kone tak, andar se seedhi line ko diagonal kehte hain. Ye sabse lambi seedhi cheez hai jo dabbe mein aa sakti hai (jaise ek lambi pencil).

**Diagonal = √(l² + b² + h²)**

Example: 12 cm × 4 cm × 3 cm ke dabbe ka diagonal = √(144 + 16 + 9) = √169 = **13 cm**. Yaani 13 cm tak lambi pencil tirchhi karke dabbe mein aa jayegi.

(Ye formula Pythagoras se do baar nikalta hai. Ye extra jaankari hai.)

---

## Part D: Cube

Cube ek khaas cuboid hai jisme **l = b = h = a**. To cuboid ke formulas mein sab jagah a rakh do:

| | Cuboid | Cube (side a) |
|---|---|---|
| TSA | 2(lb + bh + hl) | 2(a² + a² + a²) = **6a²** |
| LSA | 2h(l + b) | 2a(a + a) = **4a²** |
| Volume | lbh | **a³** |
| Diagonal (extra) | √(l² + b² + h²) | √(3a²) = **a√3** |

Samajhne ka aasan tareeka: cube ke 6 faces hain, har face a × a ka square. To TSA = 6 × a² . Chaar deewarein = 4 × a².

### Example 8: Ek cube

Side 5 cm ka cube:
- TSA = 6 × 25 = **150 cm²**
- LSA = 4 × 25 = **100 cm²**
- Volume = 5³ = **125 cm³**

### Example 9: Side double karo to kya hota hai?

Side 5 cm se badha kar 10 cm kar do.

| | Side 5 cm | Side 10 cm | Kitna guna |
|---|---|---|---|
| TSA | 150 cm² | 6 × 100 = 600 cm² | **4 guna** |
| Volume | 125 cm³ | 1000 cm³ | **8 guna** |

Side **2 guna** hui, par area **2² = 4 guna** aur volume **2³ = 8 guna**. Isi tarah side 3 guna karo to area 9 guna aur volume 27 guna.

Isiliye ek bade kaddu jaise phal mein chhilka (surface) to thoda hi badhta hai, par andar ka guda (volume) bahut zyada badh jata hai.

### Example 10: TSA se volume

Ek cube ka TSA 216 cm² hai. Uska volume kitna hai?

- 6a² = 216, to a² = 36, to a = **6 cm**
- Volume = 6³ = **216 cm³**

(Mazedaar baat: yahan number same aa gaya, par units alag hain: cm² aur cm³.)

### Example 11: Bade cube mein chhote cube

12 cm side wale ek lakdi ke cube ko kaat kar 3 cm side ke chhote cube banaye. Kitne chhote cube banenge?

- Har kinare par 12 ÷ 3 = 4 chhote cube
- Kul = 4 × 4 × 4 = **64**

**Jaanch (volume se):** Bada = 12³ = 1728 cm³. Chhota = 3³ = 27 cm³. 1728 ÷ 27 = 64 ✅

### Example 12: Kharche wala sawaal

10 cm side ke ek cube ko rangeen kaagaz se dhakna hai. Kaagaz ₹2 per 100 cm² milta hai. Kharcha kitna?

- TSA = 6 × 10² = 600 cm²
- 600 cm² mein 100 cm² ke 6 hisse
- Kharcha = 6 × ₹2 = **₹12**

---

## Aam galtiyan (bachke rehna)

**Galti 1: Units mix kar dena**
Ek dabba 2 m × 50 cm × 40 cm ka hai. 2 × 50 × 40 = 4000 likhna **galat** hai, kyunki ek naap metre mein hai aur do cm mein.
Sahi: sab cm mein: 200 × 50 × 40 = **4,00,000 cm³** = 400 litre. Ya sab m mein: 2 × 0.5 × 0.4 = 0.4 m³ = 400 litre. Dono tareekon se same jawab.

**Galti 2: Khule dabbe mein dhakkan bhi gin lena**
Bina dhakkan ke dabbe ke liye poora TSA nahi lagta. Upar wala face (l × b) ghatao. Example 4 dekho: 2200 nahi, 1600 cm².

**Galti 3: LSA aur TSA mein confusion**
"Chaar deewarein paint karo" = **LSA**. "Poora dabba dhako" = **TSA**. Sawaal dhyan se padho ki kaunse faces chahiye. Kamre mein aksar farsh paint nahi hota, par chhat ho sakti hai.

**Galti 4: 1 m³ = 100 litre maan lena**
1 m³ = **1000 litre** hota hai, 100 nahi. Yaad rakho: 1 m³ = 100 × 100 × 100 cm³ = 10,00,000 cm³, aur 1000 cm³ = 1 litre.

**Galti 5: Side double to volume double samajhna**
Side 2 guna karne par volume 2 guna nahi, **8 guna** hota hai (2³). Area 4 guna hota hai (2²).

**Galti 6: Area aur volume ki unit ulti likhna**
Area hamesha **square** unit (cm², m²) mein, volume hamesha **cubic** unit (cm³, m³) ya litre mein. 208 cm³ likha to galat, agar wo surface area tha.

---

## Quick Recap

- **Surface area** = bahar ki satah (wrapping paper), unit cm² / m². **Volume** = andar ki jagah (bharne wala saamaan), unit cm³ / m³.
- **1 L = 1000 cm³**, **1 m³ = 1000 L**, **1 m² = 10,000 cm²**.
- Cuboid aur cube: **6 faces, 12 edges, 8 vertices**.
- **Cuboid (l, b, h):** TSA = 2(lb + bh + hl), LSA (chaar deewarein) = 2h(l + b), Volume = lbh. Diagonal = √(l² + b² + h²) (extra).
- **Cube (a):** TSA = 6a², LSA = 4a², Volume = a³. Diagonal = a√3 (extra).
- Side **k guna** → area **k² guna**, volume **k³ guna**.
- Hamesha pehle **saare naap ek hi unit** mein lao, phir calculate karo.
- Khule dabbe mein top ghatao; kamre mein farsh aur darwaze-khidki dhyan se dekho.

---

## Practice Questions

1. A cuboid measures 10 cm × 8 cm × 5 cm. Find its total surface area, lateral surface area and volume.

2. The total surface area of a cube is 294 cm². Find the length of its side and its volume.

3. A room is 6 m long, 4 m wide and 3 m high. Its four walls and ceiling are to be painted. There is one door of 2 m × 1 m and two windows of 1.5 m × 1 m each. Find the area to be painted and the cost at ₹20 per m².

4. An open water tank (without a lid) is 3 m long, 2 m wide and 1.5 m deep.
   (a) Find the area of metal sheet needed to make it.
   (b) How many litres of water can it hold?

5. How many bricks of size 25 cm × 12.5 cm × 7.5 cm are needed to build a wall 15 m long, 30 cm thick and 2.5 m high? (Ignore the space taken by mortar.)

6. The side of a cube is tripled. How many times do its total surface area and its volume become?

7. How many cubes of side 2 cm can be cut from a cuboid of size 10 cm × 8 cm × 6 cm?

8. A cuboidal container has a base of 15 cm × 10 cm. When 1.2 litres of water is poured into it, how high does the water rise?

9. State whether each statement is true or false. Give a reason.
   (a) Every cube is a cuboid.
   (b) 1 m³ = 100 litres.
   (c) If the length, breadth and height of a cuboid are all doubled, its volume also doubles.

### Answers

1. lb = 80, bh = 40, hl = 50.
   TSA = 2(80 + 40 + 50) = 2 × 170 = **340 cm²**
   LSA = 2 × 5 × (10 + 8) = 10 × 18 = **180 cm²**
   Volume = 10 × 8 × 5 = **400 cm³**
   Jaanch: TSA − 2lb = 340 − 160 = 180 = LSA ✅

2. 6a² = 294, to a² = 49, to **a = 7 cm**. Volume = 7³ = **343 cm³**.

3. Chaar deewarein = 2 × 3 × (6 + 4) = 60 m². Chhat = 6 × 4 = 24 m². Kul = 84 m².
   Darwaza = 2 m², do khidkiyan = 2 × 1.5 = 3 m². Ghatana = 5 m².
   Paint ka area = 84 − 5 = **79 m²**. Kharcha = 79 × 20 = **₹1580**.

4. (a) Dhakkan nahi hai, to bottom + chaar deewarein:
   Bottom = 3 × 2 = 6 m². Deewarein = 2 × 1.5 × (3 + 2) = 15 m².
   Sheet = 6 + 15 = **21 m²**.
   (b) Volume = 3 × 2 × 1.5 = 9 m³ = 9 × 1000 = **9000 litre**.

5. Sab cm mein lao. Deewar = 1500 × 30 × 250 = 1,12,50,000 cm³.
   Eent = 25 × 12.5 × 7.5 = 2343.75 cm³.
   Eentein = 1,12,50,000 ÷ 2343.75 = **4800**.
   Jaanch: 2343.75 × 4800 = 2343.75 × 48 × 100 = 1,12,500 × 100 = 1,12,50,000 ✅

6. Side 3 guna → TSA **3² = 9 guna**, volume **3³ = 27 guna**.

7. Lambai mein 10 ÷ 2 = 5, chaudai mein 8 ÷ 2 = 4, unchai mein 6 ÷ 2 = 3.
   Kul = 5 × 4 × 3 = **60 cubes**.
   Jaanch: 480 ÷ 8 = 60 ✅ (cuboid 10 × 8 × 6 = 480 cm³, har chhota cube 8 cm³)

8. 1.2 L = 1.2 × 1000 = 1200 cm³.
   Base ka area = 15 × 10 = 150 cm².
   Unchai = 1200 ÷ 150 = **8 cm**.
   Jaanch: 15 × 10 × 8 = 1200 ✅

9. (a) **True** ✅. Cube bhi ek cuboid hai jisme l = b = h.
   (b) **False** ❌. 1 m³ = **1000** litre.
   (c) **False** ❌. Volume 2 × 2 × 2 = **8 guna** ho jata hai.

---

Dabba, kamra, tanki, eent: ab inme se kisi ka bhi "bahar ka area" aur "andar ki jagah" aap aaram se nikal sakte ho. Bas units ek jaisi rakhna, baaki formulas khud kaam kar denge!

**Agle topic mein:** Ab tak saare solids ke faces sapaat the. Par mattar ka tin, paani ki pipe ya gas cylinder? Topic 4 mein hum **cylinder** ka surface area aur volume nikalenge, jahan ek face gol hai aur ek face mudta hua.
