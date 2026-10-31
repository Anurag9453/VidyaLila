# ⚡ VidyaLila — Gamified CBSE & ICSE Learning Trails + Live Quiz Arena

**VidyaLila** combines **Salesforce Trailhead** (100% free bite-sized learning units, XP points, collectible badges, and scholar ranks) with **LeetCode Contests** (Daily Rapid Blitzes & Sunday Rated Championships, 365-day streak heatmap, Elo rating, and All-India leaderboards).

---

## ✨ Key Features Built

1. **Trailhead-Style Free Learning Trails (`/` & `/trails/[slug]`)**
   - Covers **CBSE** & **ICSE (ISC)** boards for **Class 9 to 12** (with architecture ready to toggle **Class 6 to 8**).
   - Every module is split into bite-sized **Units** with Topper Formula Boxes & interactive **Checkpoint Challenges**.
   - Completing a unit awards instant **XP Points** (`+150 XP`, `+250 XP`) and unlocks collectible Module Badges (`Photon Ranger 🔭`, `Java Ninja 💻`, `Calculus Titan 📐`).
   - 5 Gamified Student Ranks: **Shishya 🌱 → Sadhyapak ⚡ → Vidyarthi 🔥 → Maharathi 👑 → Acharya 💎**.

2. **LeetCode-Style Daily & Weekly Paid Quiz Arena (`/contests`)**
   - Supports **Subscription Pass** (`₹149/month` or `₹999/year` Pro Pass VIP) **+ Per-Contest Entry Fee** (`₹15` Daily / `₹49` Weekly) with Razorpay Checkout integration.
   - Live Timed CBT Quiz Engine with countdown timer, question palette, instant score calculation, Elo Contest Rating delta, and solution explanations.

3. **Streak Heatmap, Elo Rating & All-India Leaderboard (`/leaderboard`)**
   - LeetCode-style green daily activity heatmap, earned badge trophy case, and board-wise (`All-India`, `CBSE`, `ICSE`) leaderboard.

4. **Built-in Content Writer & Admin CMS Studio (`/studio`)**
   - Your content writers can create & publish new CBSE/ICSE modules, units, checkpoint MCQs, and paid daily/weekly contests directly from the browser.

---

## 🚀 Quick Start (Local Development)

```bash
npm install
npm run dev
```

Open **http://localhost:3000** in your browser.

---

## 🗄️ Connecting Supabase & Deploying to Vercel

1. Create a free project at [supabase.com](https://supabase.com).
2. Open the **SQL Editor** in Supabase and run the full script from [`supabase/schema.sql`](./supabase/schema.sql).
3. Copy `.env.example` to `.env.local` and fill in:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `NEXT_PUBLIC_RAZORPAY_KEY_ID` & `RAZORPAY_KEY_SECRET`
4. Push this repository to GitHub and import into [Vercel](https://vercel.com) for 1-click deployment.
