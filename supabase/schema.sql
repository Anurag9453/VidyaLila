-- ============================================================================
-- VIDYALILA - COMPLETE SUPABASE POSTGRESQL SCHEMA
-- Covers: Profiles, Pass Wallet, Bilingual Modules/Units, Unit Progress (GP),
-- Dual-Track Subject Quizzes, Goodie Rewards, Payments & Academic Error Reports
-- ============================================================================

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- ----------------------------------------------------------------------------
-- 1. STUDENT & ADMIN PROFILES (Linked to Supabase auth.users)
-- ----------------------------------------------------------------------------
create table if not exists public.profiles (
  id uuid references auth.users on delete cascade primary key,
  full_name text not null,
  username text unique not null,
  avatar_url text default '🚀',
  board text not null default 'CBSE' check (board in ('CBSE', 'ICSE')),
  class_grade int not null default 10 check (class_grade between 9 and 12),
  city text default 'Delhi',
  school_name text default 'VidyaLila Academy',
  role text not null default 'student' check (role in ('student', 'writer', 'admin')),
  -- Gyan Points (GP): Strictly earned ONLY from free study units & unit tests
  xp_points int not null default 0,
  -- Contest Rating: Updated ONLY from Live/Upcoming Subject Quizzes
  contest_rating int not null default 1500,
  current_streak int not null default 1,
  max_streak int not null default 1,
  badges_count int not null default 0,
  earned_badges jsonb not null default '[]'::jsonb,
  -- Quiz-Wise Pass Wallet (Basic = 2 Daily, VIP = 7 Daily + 1 Weekly, Pro = 30 Daily + 4 Weekly)
  has_pro_pass boolean not null default false,
  pro_pass_plan text check (pro_pass_plan in ('ONE_DAY', 'WEEKLY', 'MONTHLY')),
  daily_passes_remaining int not null default 0,
  competition_passes_remaining int not null default 0,
  unlocked_contest_ids text[] not null default '{}',
  created_at timestamptz not null default now()
);

-- ----------------------------------------------------------------------------
-- 2. LEARNING MODULES (CHAPTERS) - 100% Free Self-Study Chapters
-- ----------------------------------------------------------------------------
create table if not exists public.modules (
  id uuid default uuid_generate_v4() primary key,
  slug text unique not null,
  chapter_number int not null default 1,
  title text not null,
  description text not null,
  board text not null check (board in ('CBSE', 'ICSE', 'BOTH')),
  class_grade int not null check (class_grade between 9 and 12),
  subject text not null,
  difficulty text not null default 'Intermediate',
  badge_name text not null,
  badge_icon text not null,
  total_xp int not null default 300,
  estimated_minutes int not null default 45,
  is_published boolean not null default true,
  author_id uuid references public.profiles(id),
  created_at timestamptz not null default now()
);

-- ----------------------------------------------------------------------------
-- 3. MODULE UNITS (Bilingual English + Hinglish Study Content & 100-Mark Test)
-- ----------------------------------------------------------------------------
create table if not exists public.units (
  id uuid default uuid_generate_v4() primary key,
  module_id uuid references public.modules(id) on delete cascade not null,
  unit_order int not null,
  title text not null,
  estimated_minutes int not null default 15,
  xp_reward int not null default 100,
  -- English & Hinglish structured study content (Topic Goal, Sections, Formula Tips)
  objectives text[] default '{}',
  objectives_hinglish text[] default '{}',
  content_sections jsonb not null default '[]'::jsonb,
  content_sections_hinglish jsonb not null default '[]'::jsonb,
  -- 10 MCQs for the 100-Mark Tiered Unit Practice Test (10m / 5m / 2m floor)
  checkpoint_questions jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default now()
);

-- ----------------------------------------------------------------------------
-- 4. USER UNIT COMPLETION (Tracks GP Earned & 100-Mark Unit Test Scores)
-- ----------------------------------------------------------------------------
create table if not exists public.user_unit_progress (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  module_id uuid references public.modules(id) on delete cascade not null,
  unit_id text not null,
  unit_test_marks int not null default 100,
  xp_awarded int not null default 100,
  completed_at timestamptz not null default now(),
  unique(user_id, unit_id)
);

-- ----------------------------------------------------------------------------
-- 5. SUBJECT QUIZZES (Daily, Weekly, Monthly • Full Syllabus & Selected Chapters)
-- ----------------------------------------------------------------------------
create table if not exists public.contests (
  id uuid default uuid_generate_v4() primary key,
  slug text unique,
  title text not null,
  subtitle text,
  contest_type text not null check (contest_type in ('DAILY', 'WEEKLY', 'MONTHLY')),
  syllabus_scope text not null default 'FULL_SYLLABUS' check (syllabus_scope in ('FULL_SYLLABUS', 'SELECTED_CHAPTERS')),
  included_chapters text[] not null default '{}',
  board text not null default 'BOTH' check (board in ('CBSE', 'ICSE', 'BOTH')),
  class_grade int not null check (class_grade between 9 and 12),
  subject text not null,
  scheduled_time_slot text not null default '3:00 PM IST',
  frequency_label text not null default 'Once a Day • 3:00 PM Slot',
  entry_fee_inr int not null default 49,
  prize_pool_text text not null default '🎁 Top 3 Win Free ⚡ Basic Pass (2 Quizzes • ₹49) • Top 10 Win +1 Free Quiz Pass',
  duration_minutes int not null default 15,
  is_live boolean not null default true,
  starts_at timestamptz default now(),
  questions jsonb not null default '[]'::jsonb,
  participants_count int not null default 0,
  created_at timestamptz not null default now()
);

-- ----------------------------------------------------------------------------
-- 6. QUIZ SUBMISSIONS & GOODIE FREE PASS REWARDS
-- ----------------------------------------------------------------------------
create table if not exists public.contest_submissions (
  id uuid default uuid_generate_v4() primary key,
  contest_id text not null,
  user_id uuid references public.profiles(id) on delete cascade not null,
  score int not null default 0,
  total_questions int not null default 0,
  accuracy_percent int not null default 0,
  rating_delta int not null default 0,
  goodie_daily_passes_won int not null default 0,
  goodie_comp_passes_won int not null default 0,
  goodie_label text,
  submitted_at timestamptz default now()
);

-- ----------------------------------------------------------------------------
-- 7. PASS RECHARGE ORDERS (⚡ Basic ₹49 / 💎 VIP ₹149 / 👑 Pro ₹499 via Razorpay)
-- ----------------------------------------------------------------------------
create table if not exists public.payment_orders (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  package_plan text not null check (package_plan in ('ONE_DAY', 'WEEKLY', 'MONTHLY')),
  daily_passes_granted int not null default 2,
  competition_passes_granted int not null default 0,
  amount_inr int not null,
  razorpay_order_id text unique,
  razorpay_payment_id text,
  razorpay_signature text,
  status text not null default 'created' check (status in ('created', 'paid', 'failed')),
  created_at timestamptz not null default now()
);

-- ----------------------------------------------------------------------------
-- 8. ACADEMIC ERROR REPORTS & BONUS-MARKS AUDIT LOG (Legal Safeguard Queue)
-- ----------------------------------------------------------------------------
create table if not exists public.content_reports (
  id uuid default uuid_generate_v4() primary key,
  module_slug text not null,
  chapter_title text not null,
  unit_title text not null,
  target_label text not null,
  issue_type text not null check (issue_type in ('TYPO', 'WRONG_ANSWER_KEY', 'FORMULA_CLARIFICATION', 'OTHER')),
  description text not null,
  reported_by_user_id uuid references public.profiles(id) on delete set null,
  reported_by_label text not null,
  status text not null default 'OPEN' check (status in ('OPEN', 'RESOLVED_BONUS_GRANTED')),
  created_at timestamptz not null default now()
);

-- ----------------------------------------------------------------------------
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ----------------------------------------------------------------------------
alter table public.profiles enable row level security;
alter table public.modules enable row level security;
alter table public.units enable row level security;
alter table public.user_unit_progress enable row level security;
alter table public.contests enable row level security;
alter table public.contest_submissions enable row level security;
alter table public.payment_orders enable row level security;
alter table public.content_reports enable row level security;

create policy "Public modules are viewable by everyone" on public.modules for select using (true);
create policy "Public units are viewable by everyone" on public.units for select using (true);
create policy "Public contests are viewable by everyone" on public.contests for select using (true);
create policy "Public profiles for leaderboard" on public.profiles for select using (true);
create policy "Users can insert their own profile" on public.profiles for insert with check (auth.uid() = id);
create policy "Users can update their own profile" on public.profiles for update using (auth.uid() = id);
create policy "Users can view their own progress" on public.user_unit_progress for select using (auth.uid() = user_id);
create policy "Users can insert their own progress" on public.user_unit_progress for insert with check (auth.uid() = user_id);
create policy "Users can view contest submissions" on public.contest_submissions for select using (true);
create policy "Users can insert their own submissions" on public.contest_submissions for insert with check (auth.uid() = user_id);
create policy "Users can view their own payment orders" on public.payment_orders for select using (auth.uid() = user_id);
create policy "Anyone can view and submit content reports" on public.content_reports for select using (true);
create policy "Authenticated users can submit content reports" on public.content_reports for insert with check (true);

-- ----------------------------------------------------------------------------
-- AUTOMATIC PROFILE CREATION TRIGGER ON SUPABASE SIGNUP
-- ----------------------------------------------------------------------------
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (
    id,
    full_name,
    username,
    board,
    class_grade,
    city,
    school_name,
    xp_points
  )
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'full_name', split_part(new.email, '@', 1)),
    coalesce(new.raw_user_meta_data->>'username', '@' || lower(regexp_replace(split_part(new.email, '@', 1), '[^a-zA-Z0-9]', '', 'g')) || '_' || substr(new.id::text, 1, 4)),
    coalesce(new.raw_user_meta_data->>'board', 'CBSE'),
    coalesce((new.raw_user_meta_data->>'class_grade')::int, 10),
    coalesce(new.raw_user_meta_data->>'city', 'Delhi'),
    coalesce(new.raw_user_meta_data->>'school_name', 'VidyaLila Academy'),
    coalesce((new.raw_user_meta_data->>'xp_points')::int, 100)
  )
  on conflict (id) do nothing;
  return new;
end;
$$ language plpgsql security definer;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
