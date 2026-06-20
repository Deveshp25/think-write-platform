create extension if not exists "pgcrypto";

do $$
begin
  if not exists (select 1 from pg_type where typname = 'package_interest') then
    create type public.package_interest as enum (
      'launchpad',
      'author_pro',
      'legacy_author',
      'young_author_programme'
    );
  end if;

  if not exists (select 1 from pg_type where typname = 'lead_status') then
    create type public.lead_status as enum (
      'new',
      'contacted',
      'qualified',
      'converted',
      'lost',
      'archived'
    );
  end if;

  if not exists (select 1 from pg_type where typname = 'booking_status') then
    create type public.booking_status as enum (
      'new',
      'contacted',
      'scheduled',
      'completed',
      'cancelled'
    );
  end if;

  if not exists (select 1 from pg_type where typname = 'manuscript_status') then
    create type public.manuscript_status as enum (
      'idea_stage',
      'outline_ready',
      'partially_written',
      'first_draft_ready',
      'edited_manuscript'
    );
  end if;

  if not exists (select 1 from pg_type where typname = 'application_status') then
    create type public.application_status as enum (
      'new',
      'submitted',
      'under_review',
      'shortlisted',
      'accepted',
      'rejected',
      'enrolled'
    );
  end if;
end $$;

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create table if not exists public.contacts (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(trim(name)) between 2 and 120),
  email text not null check (email ~* '^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$'),
  phone text not null check (char_length(regexp_replace(phone, '[^0-9+]', '', 'g')) between 8 and 16),
  interest text not null check (char_length(trim(interest)) between 2 and 120),
  message text not null check (char_length(trim(message)) between 10 and 1000),
  source text not null default 'website',
  status public.lead_status not null default 'new',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.consultation_bookings (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(trim(name)) between 2 and 120),
  email text not null check (email ~* '^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$'),
  phone text not null check (char_length(regexp_replace(phone, '[^0-9+]', '', 'g')) between 8 and 16),
  package_interested public.package_interest not null,
  preferred_date date not null check (preferred_date >= current_date),
  message text not null check (char_length(trim(message)) between 10 and 1000),
  source text not null default 'website',
  user_agent text,
  status public.booking_status not null default 'new',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.publishing_applications (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(trim(name)) between 2 and 120),
  email text not null check (email ~* '^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$'),
  phone text not null check (char_length(regexp_replace(phone, '[^0-9+]', '', 'g')) between 8 and 16),
  package_interested public.package_interest not null,
  book_title text not null check (char_length(trim(book_title)) between 2 and 180),
  genre text not null check (char_length(trim(genre)) between 2 and 120),
  manuscript_status public.manuscript_status not null,
  message text not null check (char_length(trim(message)) between 10 and 1500),
  source text not null default 'website',
  status public.application_status not null default 'new',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.young_author_applications (
  id uuid primary key default gen_random_uuid(),
  student_name text not null check (char_length(trim(student_name)) between 2 and 120),
  student_age int not null check (student_age between 5 and 21),
  parent_name text not null check (char_length(trim(parent_name)) between 2 and 120),
  parent_email text not null check (parent_email ~* '^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$'),
  parent_phone text not null check (char_length(regexp_replace(parent_phone, '[^0-9+]', '', 'g')) between 8 and 16),
  book_idea text not null check (char_length(trim(book_idea)) between 10 and 1500),
  message text not null check (char_length(trim(message)) between 10 and 1500),
  source text not null default 'website',
  status public.application_status not null default 'submitted',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

drop trigger if exists contacts_set_updated_at on public.contacts;
create trigger contacts_set_updated_at
before update on public.contacts
for each row execute function public.set_updated_at();

drop trigger if exists consultation_bookings_set_updated_at on public.consultation_bookings;
create trigger consultation_bookings_set_updated_at
before update on public.consultation_bookings
for each row execute function public.set_updated_at();

drop trigger if exists publishing_applications_set_updated_at on public.publishing_applications;
create trigger publishing_applications_set_updated_at
before update on public.publishing_applications
for each row execute function public.set_updated_at();

drop trigger if exists young_author_applications_set_updated_at on public.young_author_applications;
create trigger young_author_applications_set_updated_at
before update on public.young_author_applications
for each row execute function public.set_updated_at();

create index if not exists idx_contacts_created_at on public.contacts (created_at desc);
create index if not exists idx_contacts_status on public.contacts (status);
create index if not exists idx_contacts_email on public.contacts (email);

create index if not exists idx_consultation_bookings_created_at on public.consultation_bookings (created_at desc);
create index if not exists idx_consultation_bookings_status on public.consultation_bookings (status);
create index if not exists idx_consultation_bookings_preferred_date on public.consultation_bookings (preferred_date);
create index if not exists idx_consultation_bookings_package_interested on public.consultation_bookings (package_interested);

create index if not exists idx_publishing_applications_created_at on public.publishing_applications (created_at desc);
create index if not exists idx_publishing_applications_status on public.publishing_applications (status);
create index if not exists idx_publishing_applications_package_interested on public.publishing_applications (package_interested);
create index if not exists idx_publishing_applications_email on public.publishing_applications (email);

create index if not exists idx_young_author_applications_created_at on public.young_author_applications (created_at desc);
create index if not exists idx_young_author_applications_status on public.young_author_applications (status);
create index if not exists idx_young_author_applications_parent_email on public.young_author_applications (parent_email);

alter table public.contacts enable row level security;
alter table public.consultation_bookings enable row level security;
alter table public.publishing_applications enable row level security;
alter table public.young_author_applications enable row level security;

drop policy if exists "Anyone can create contacts" on public.contacts;
drop policy if exists "Admins can manage contacts" on public.contacts;
drop policy if exists "Anyone can create consultation bookings" on public.consultation_bookings;
drop policy if exists "Admins can manage consultation bookings" on public.consultation_bookings;
drop policy if exists "Anyone can create publishing applications" on public.publishing_applications;
drop policy if exists "Admins can manage publishing applications" on public.publishing_applications;
drop policy if exists "Anyone can create young author applications" on public.young_author_applications;
drop policy if exists "Admins can manage young author applications" on public.young_author_applications;

create policy "Anyone can create contacts"
on public.contacts
for insert
to anon, authenticated
with check (true);

create policy "Admins can manage contacts"
on public.contacts
for all
to authenticated
using (coalesce(auth.jwt() -> 'app_metadata' ->> 'role', '') in ('sales_admin', 'super_admin'))
with check (coalesce(auth.jwt() -> 'app_metadata' ->> 'role', '') in ('sales_admin', 'super_admin'));

create policy "Anyone can create consultation bookings"
on public.consultation_bookings
for insert
to anon, authenticated
with check (true);

create policy "Admins can manage consultation bookings"
on public.consultation_bookings
for all
to authenticated
using (coalesce(auth.jwt() -> 'app_metadata' ->> 'role', '') in ('sales_admin', 'super_admin'))
with check (coalesce(auth.jwt() -> 'app_metadata' ->> 'role', '') in ('sales_admin', 'super_admin'));

create policy "Anyone can create publishing applications"
on public.publishing_applications
for insert
to anon, authenticated
with check (true);

create policy "Admins can manage publishing applications"
on public.publishing_applications
for all
to authenticated
using (coalesce(auth.jwt() -> 'app_metadata' ->> 'role', '') in ('sales_admin', 'publishing_manager', 'super_admin'))
with check (coalesce(auth.jwt() -> 'app_metadata' ->> 'role', '') in ('sales_admin', 'publishing_manager', 'super_admin'));

create policy "Anyone can create young author applications"
on public.young_author_applications
for insert
to anon, authenticated
with check (true);

create policy "Admins can manage young author applications"
on public.young_author_applications
for all
to authenticated
using (coalesce(auth.jwt() -> 'app_metadata' ->> 'role', '') in ('sales_admin', 'publishing_manager', 'super_admin'))
with check (coalesce(auth.jwt() -> 'app_metadata' ->> 'role', '') in ('sales_admin', 'publishing_manager', 'super_admin'));
