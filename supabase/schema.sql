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
  email text,
  phone text,
  auth_provider text not null default 'email',
  full_name text not null,
  username text unique not null,
  avatar_url text default '🚀',
  board text not null default 'CBSE' check (board in ('CBSE', 'ICSE')),
  class_grade int not null default 9 check (class_grade between 9 and 12),
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

-- Ensure new columns exist if public.profiles was created by an earlier migration
alter table public.profiles add column if not exists email text;
alter table public.profiles add column if not exists phone text;
alter table public.profiles add column if not exists auth_provider text not null default 'email';
alter table public.profiles add column if not exists preferred_language text not null default 'HINGLISH' check (preferred_language in ('ENGLISH', 'HINGLISH'));
alter table public.profiles add column if not exists onboarding_completed boolean not null default false;

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
  phone text,
  user_name text,
  user_email text,
  failure_reason text,
  failure_code text,
  contact_status text not null default 'PENDING_CONTACT' check (contact_status in ('PENDING_CONTACT', 'CONTACTED', 'CONVERTED', 'NOT_INTERESTED')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Ensure payment_orders columns exist if table was created in an earlier migration
alter table public.payment_orders add column if not exists phone text;
alter table public.payment_orders add column if not exists user_name text;
alter table public.payment_orders add column if not exists user_email text;
alter table public.payment_orders add column if not exists failure_reason text;
alter table public.payment_orders add column if not exists failure_code text;
alter table public.payment_orders add column if not exists contact_status text not null default 'PENDING_CONTACT';
alter table public.payment_orders add column if not exists updated_at timestamptz not null default now();

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

drop policy if exists "Public modules are viewable by everyone" on public.modules;
create policy "Public modules are viewable by everyone" on public.modules for select using (true);

drop policy if exists "Public units are viewable by everyone" on public.units;
create policy "Public units are viewable by everyone" on public.units for select using (true);

drop policy if exists "Public contests are viewable by everyone" on public.contests;
create policy "Public contests are viewable by everyone" on public.contests for select using (true);

drop policy if exists "Public profiles for leaderboard" on public.profiles;
create policy "Public profiles for leaderboard" on public.profiles for select using (true);

drop policy if exists "Users can insert their own profile" on public.profiles;
create policy "Users can insert their own profile" on public.profiles for insert with check (auth.uid() = id);

drop policy if exists "Users can update their own profile" on public.profiles;
create policy "Users can update their own profile" on public.profiles for update using (auth.uid() = id);

-- Restrict student updates to harmless columns only; XP, rating, passes & role can only change on server
revoke update on public.profiles from authenticated, anon;
grant update (full_name, username, avatar_url, board, class_grade, preferred_language, onboarding_completed, city, school_name, phone) on public.profiles to authenticated;

create or replace function public.protect_profile_columns()
returns trigger as $$
begin
  -- Prevent authenticated users from modifying protected columns directly
  if (current_setting('request.jwt.claim.role', true) = 'authenticated' and current_user != 'service_role') then
    if new.role is distinct from old.role then
      raise exception 'Security violation: Role cannot be modified directly';
    end if;
    if new.xp_points is distinct from old.xp_points then
      raise exception 'Security violation: XP can only be awarded by the server';
    end if;
    if new.contest_rating is distinct from old.contest_rating then
      raise exception 'Security violation: Contest rating can only be updated by the server';
    end if;
    if new.has_pro_pass is distinct from old.has_pro_pass or
       new.pro_pass_plan is distinct from old.pro_pass_plan or
       new.daily_passes_remaining is distinct from old.daily_passes_remaining or
       new.competition_passes_remaining is distinct from old.competition_passes_remaining or
       new.unlocked_contest_ids is distinct from old.unlocked_contest_ids then
      raise exception 'Security violation: Passes can only be modified by the server';
    end if;
  end if;
  return new;
end;
$$ language plpgsql security definer;

drop trigger if exists protect_profile_columns_trigger on public.profiles;
create trigger protect_profile_columns_trigger
before update on public.profiles
for each row execute function public.protect_profile_columns();

drop policy if exists "Users can view their own progress" on public.user_unit_progress;
create policy "Users can view their own progress" on public.user_unit_progress for select using (auth.uid() = user_id);

drop policy if exists "Users can insert their own progress" on public.user_unit_progress;
create policy "Users can insert their own progress" on public.user_unit_progress for insert with check (auth.uid() = user_id);

drop policy if exists "Users can view contest submissions" on public.contest_submissions;
create policy "Users can view contest submissions" on public.contest_submissions for select using (true);

drop policy if exists "Users can insert their own submissions" on public.contest_submissions;
create policy "Users can insert their own submissions" on public.contest_submissions for insert with check (auth.uid() = user_id);

drop policy if exists "Users can view their own payment orders" on public.payment_orders;
create policy "Users can view their own payment orders" on public.payment_orders for select using (auth.uid() = user_id);

drop policy if exists "Anyone can view and submit content reports" on public.content_reports;
create policy "Anyone can view and submit content reports" on public.content_reports for select using (true);

drop policy if exists "Authenticated users can submit content reports" on public.content_reports;
create policy "Authenticated users can submit content reports" on public.content_reports for insert with check (true);

-- ----------------------------------------------------------------------------
-- AUTOMATIC PROFILE CREATION TRIGGER ON SUPABASE SIGNUP (EMAIL & GOOGLE OAUTH)
-- ----------------------------------------------------------------------------
create or replace function public.handle_new_user()
returns trigger as $$
declare
  raw_name text;
  clean_handle text;
  grade_val int;
begin
  raw_name := coalesce(
    new.raw_user_meta_data->>'full_name',
    new.raw_user_meta_data->>'name',
    split_part(coalesce(new.email, 'scholar'), '@', 1),
    'Scholar'
  );
  clean_handle := lower(regexp_replace(split_part(coalesce(new.email, raw_name), '@', 1), '[^a-zA-Z0-9]', '', 'g'));
  if clean_handle = '' then
    clean_handle := 'scholar';
  end if;

  grade_val := coalesce((new.raw_user_meta_data->>'class_grade')::int, 9);
  if grade_val < 9 or grade_val > 12 then
    grade_val := 9;
  end if;

  insert into public.profiles (
    id,
    email,
    phone,
    auth_provider,
    full_name,
    username,
    avatar_url,
    board,
    class_grade,
    city,
    school_name,
    xp_points
  )
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data->>'phone', null),
    coalesce(new.raw_app_meta_data->>'provider', 'email'),
    raw_name,
    coalesce(new.raw_user_meta_data->>'username', '@' || clean_handle || '_' || substr(new.id::text, 1, 4)),
    coalesce(new.raw_user_meta_data->>'avatar_url', new.raw_user_meta_data->>'picture', '🚀'),
    coalesce(new.raw_user_meta_data->>'board', 'CBSE'),
    grade_val,
    coalesce(new.raw_user_meta_data->>'city', 'Delhi'),
    coalesce(new.raw_user_meta_data->>'school_name', 'VidyaLila Academy'),
    coalesce((new.raw_user_meta_data->>'xp_points')::int, 0)
  )
  on conflict (id) do update set
    email = excluded.email,
    full_name = coalesce(public.profiles.full_name, excluded.full_name),
    avatar_url = case
      when public.profiles.avatar_url is null or public.profiles.avatar_url = '🚀'
      then excluded.avatar_url
      else public.profiles.avatar_url
    end;
  return new;
end;
$$ language plpgsql security definer;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- ----------------------------------------------------------------------------
-- 9. COLLABORATIVE DOUBT CHANNELS & @VIDYABOT MESSAGES
-- ----------------------------------------------------------------------------
create table if not exists public.discussion_messages (
  id uuid default uuid_generate_v4() primary key,
  channel_id text not null default 'class-9-doubts',
  class_grade int not null default 9 check (class_grade between 9 and 12),
  chapter_tag text not null default 'General',
  -- Optional context linking message to a specific chapter unit or quiz question
  question_ref jsonb default null,
  sender_id uuid references public.profiles(id) on delete set null,
  sender_name text not null,
  sender_username text not null,
  sender_avatar text not null default '🚀',
  sender_role text not null default 'student' check (sender_role in ('student', 'bot', 'admin')),
  content text not null,
  parent_id uuid references public.discussion_messages(id) on delete cascade,
  upvotes int not null default 0,
  upvoted_by text[] not null default '{}',
  is_helpful_solution boolean not null default false,
  created_at timestamptz not null default now()
);

create index if not exists idx_discussion_messages_channel on public.discussion_messages(channel_id, created_at asc);
create index if not exists idx_discussion_messages_class on public.discussion_messages(class_grade, created_at desc);

alter table public.discussion_messages enable row level security;

drop policy if exists "Anyone can view discussion messages" on public.discussion_messages;
create policy "Anyone can view discussion messages"
  on public.discussion_messages for select using (true);

drop policy if exists "Authenticated users can insert student messages" on public.discussion_messages;
create policy "Authenticated users can insert student messages"
  on public.discussion_messages for insert
  with check (auth.uid() = sender_id and sender_role = 'student');

-- ----------------------------------------------------------------------------
-- 10. STUDY GROUP MEMBERSHIPS (SINGLE-GROUP JOIN REQUEST, ADMIN APPROVAL & BARRING)
-- ----------------------------------------------------------------------------
create table if not exists public.study_group_memberships (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.profiles(id) on delete cascade,
  -- Unique user_key enforces that a student can only request/join ONE group at a time
  user_key text unique not null,
  user_name text not null,
  user_username text not null,
  user_avatar text not null default '🚀',
  channel_id text not null default 'class-9-doubts',
  class_grade int not null default 9 check (class_grade between 9 and 12),
  request_note text default '',
  status text not null default 'pending' check (status in ('pending', 'approved', 'rejected', 'barred')),
  violation_count int not null default 0,
  last_violation_reason text default null,
  barred_reason text default null,
  requested_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists idx_study_group_memberships_status on public.study_group_memberships(status, requested_at desc);
create index if not exists idx_study_group_memberships_channel on public.study_group_memberships(channel_id, status);

alter table public.study_group_memberships enable row level security;

drop policy if exists "Anyone can read study group memberships" on public.study_group_memberships;
create policy "Anyone can read study group memberships"
  on public.study_group_memberships for select using (true);


