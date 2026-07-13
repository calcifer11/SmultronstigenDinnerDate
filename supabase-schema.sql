create table if not exists public.dinner_app_state (
  id text primary key default 'global',
  state jsonb not null,
  updated_at timestamptz not null default now()
);

alter table public.dinner_app_state enable row level security;

drop policy if exists "Smultronstigen dinner state is readable" on public.dinner_app_state;
create policy "Smultronstigen dinner state is readable"
on public.dinner_app_state
for select
to anon
using (true);

drop policy if exists "Smultronstigen dinner state is writable" on public.dinner_app_state;
create policy "Smultronstigen dinner state is writable"
on public.dinner_app_state
for insert
to anon
with check (id = 'global');

drop policy if exists "Smultronstigen dinner state is updateable" on public.dinner_app_state;
create policy "Smultronstigen dinner state is updateable"
on public.dinner_app_state
for update
to anon
using (id = 'global')
with check (id = 'global');

insert into public.dinner_app_state (id, state)
values ('global', '{"foods": [], "hosts": []}'::jsonb)
on conflict (id) do nothing;

do $$
begin
  alter publication supabase_realtime add table public.dinner_app_state;
exception
  when duplicate_object then null;
end $$;
