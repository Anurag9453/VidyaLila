# 🦚 VidyaLila — CBSE & ICSE Self-Study & Live Subject Quiz Platform

**VidyaLila** (*Vidya* = Knowledge + *Lila* = Playful Mastery) is an interactive learning and live quiz platform for **Class 9–12 (CBSE & ICSE)** built with **Next.js 14 (App Router, TypeScript, Tailwind CSS)** and **Supabase (PostgreSQL + Auth)**.

---

## ✨ Core Features

1. **Free Bilingual Study Chapters & 100-Mark Unit Practice Tests (`/` & `/trails/[slug]`)**
   - 100% English UI across the site; **English ↔ Hinglish** toggle exclusively for main unit study content.
   - **100-Mark Tiered Unit Practice Test** (`10 Questions × 10 Marks`): `10m` on 1st attempt, `5m` after 1 wrong try, `2m` minimum floor after 2+ wrong tries.
   - **Gyan Points (`GP`)** are earned strictly from completing free study units and unit practice tests.

2. **Dual-Track Live & Upcoming Subject Quizzes (`/contests`)**
   - Conducted strictly on a **Class + Subject** basis at staggered time slots (`3:00 PM`, `4:00 PM`, `5:00 PM IST`).
   - Supports both **`🌍 Full Syllabus`** and **`📌 Selected Chapters`** quiz tracks.
   - **Quiz-Wise Pass Wallet**:
     - **⚡ Basic Pass (`₹49`)**: `2 Daily Quizzes`
     - **💎 VIP Pass (`₹149`)**: `7 Daily Quizzes + 1 Weekly Quiz` (`8` total credits)
     - **👑 Pro Pass (`₹499`)**: `30 Daily Quizzes + 4 Weekly Quizzes` (`34` total credits)
   - **🎁 Top-Ranker Goodies**: Top 3 & Top 10 winners automatically win Free Pass Credits into their wallet.

3. **Protected Admin CMS & Academic Review Studio (`/studio`)**
   - Protected by the Founder Admin Passcode (`VIDYALILA2026`).
   - Publish new Chapters, Units, and Subject Quizzes directly to **Supabase Cloud** (`/api/studio/publish`) and review student-submitted error reports.

---

## 💻 Setup on a New System (2 Minutes)

### 1. Clone & Install Dependencies
```bash
git clone https://github.com/Anurag9453/VidyaLila.git
cd VidyaLila
npm install
```

### 2. Create `.env.local` in the Project Root
Copy `.env.example` to `.env.local` and paste your Supabase keys:
```env
NEXT_PUBLIC_SUPABASE_URL=https://obnkrztcwpyrfpnuwzvg.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=<your-anon-key>
SUPABASE_SERVICE_ROLE_KEY=<your-service-role-key>
```

### 3. Run the Development Server
```bash
npm run dev
```
Open **http://localhost:3000** in your browser.
- **Admin CMS Studio**: Go to **http://localhost:3000/studio** and unlock with passcode **`VIDYALILA2026`**.
