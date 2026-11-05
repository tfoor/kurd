-- مصروف البيت: الصق هذا الملف كاملاً في Supabase > SQL Editor ثم Run

create table families(
  id uuid primary key default gen_random_uuid(),
  name text not null,
  fund numeric not null default 0 check (fund >= 0)
);
create table members(
  id uuid primary key default gen_random_uuid(),
  family_id uuid not null references families on delete cascade,
  user_id uuid references auth.users,
  name text not null,
  role text not null default 'member',
  balance numeric not null default 0 check (balance >= 0),
  created_at timestamptz not null default now(),
  unique (family_id, name)
);
create table ops(
  id bigint generated always as identity primary key,
  family_id uuid not null references families on delete cascade,
  t text not null, who text, amt numeric not null, txt text, cat text,
  ts timestamptz not null default now()
);
create table debts(
  id bigint generated always as identity primary key,
  family_id uuid not null references families on delete cascade,
  debtor text not null, cred text not null,
  amt numeric not null check (amt > 0),
  paid numeric not null default 0 check (paid <= amt),
  ts timestamptz not null default now()
);
create table goals(
  id bigint generated always as identity primary key,
  family_id uuid not null references families on delete cascade,
  name text not null, target numeric not null check (target > 0),
  saved numeric not null default 0
);

create function my_family() returns uuid
language sql stable security definer set search_path = public as
$$ select family_id from members where user_id = auth.uid() limit 1 $$;

-- قراءة فقط لأفراد العائلة. لا توجد سياسات كتابة، فكل التعديل يمر عبر الدوال أدناه
alter table families enable row level security;
alter table members  enable row level security;
alter table ops      enable row level security;
alter table debts    enable row level security;
alter table goals    enable row level security;
create policy r on families for select using (id = my_family());
create policy r on members  for select using (family_id = my_family());
create policy r on ops      for select using (family_id = my_family());
create policy r on debts    for select using (family_id = my_family());
create policy r on goals    for select using (family_id = my_family());

create function create_family(p_fam text, p_me text) returns void
language plpgsql security definer set search_path = public as $$
declare f uuid;
begin
  if auth.uid() is null then raise exception 'login required'; end if;
  if my_family() is not null then raise exception 'already in a family'; end if;
  insert into families(name) values (p_fam) returning id into f;
  insert into members(family_id, user_id, name, role) values (f, auth.uid(), p_me, 'admin');
end $$;

create function add_member(p_nm text) returns void
language plpgsql security definer set search_path = public as $$
begin
  if not exists (select 1 from members where user_id = auth.uid() and role = 'admin') then
    raise exception 'admin only';
  end if;
  insert into members(family_id, name) values (my_family(), p_nm);
end $$;

create function add_goal(p_n text, p_t numeric) returns void
language plpgsql security definer set search_path = public as $$
begin
  if my_family() is null then raise exception 'no family'; end if;
  insert into goals(family_id, name, target) values (my_family(), p_n, p_t);
end $$;

-- كل عملية مالية تتم داخل transaction واحدة مع قفل على العائلة، وأي رصيد سالب يلغي العملية كلها
create function do_op(p_t text, p_who text, p_to text, p_amt numeric, p_note text,
                      p_cat text, p_fund boolean, p_cred text, p_goal bigint) returns void
language plpgsql security definer set search_path = public as $$
declare f uuid := my_family();
begin
  if f is null then raise exception 'no family'; end if;
  if p_amt is null or p_amt <= 0 then raise exception 'bad amount'; end if;
  perform 1 from families where id = f for update;

  if p_t = 'income' then
    update families set fund = fund + p_amt where id = f;
  elsif p_t = 'expense' then
    if p_fund then update families set fund = fund - p_amt where id = f;
    else update members set balance = balance - p_amt where family_id = f and name = p_who;
         if not found then raise exception 'member not found'; end if;
    end if;
  elsif p_t = 'withdraw' then
    update families set fund = fund - p_amt where id = f;
    update members set balance = balance + p_amt where family_id = f and name = p_who;
    if not found then raise exception 'member not found'; end if;
  elsif p_t = 'transfer' then
    update members set balance = balance - p_amt where family_id = f and name = p_who;
    if not found then raise exception 'member not found'; end if;
    update members set balance = balance + p_amt where family_id = f and name = p_to;
    if not found then raise exception 'member not found'; end if;
  elsif p_t = 'debt' then
    insert into debts(family_id, debtor, cred, amt) values (f, p_who, p_cred, p_amt);
  elsif p_t = 'goal' then
    update families set fund = fund - p_amt where id = f;
    update goals set saved = saved + p_amt where id = p_goal and family_id = f;
    if not found then raise exception 'goal not found'; end if;
  else raise exception 'bad type';
  end if;

  insert into ops(family_id, t, who, amt, txt, cat)
  values (f, p_t, case when p_t = 'goal' then 'صندوق البيت' else p_who end, p_amt, p_note, p_cat);
end $$;

create function pay_debt(p_id bigint, p_amt numeric, p_src text) returns void
language plpgsql security definer set search_path = public as $$
declare f uuid := my_family(); d debts;
begin
  if f is null then raise exception 'no family'; end if;
  perform 1 from families where id = f for update;
  select * into d from debts where id = p_id and family_id = f for update;
  if not found then raise exception 'debt not found'; end if;
  if p_amt <= 0 or p_amt > d.amt - d.paid then raise exception 'bad amount'; end if;

  if p_src = 'الصندوق' then update families set fund = fund - p_amt where id = f;
  else update members set balance = balance - p_amt where family_id = f and name = p_src;
       if not found then raise exception 'member not found'; end if;
  end if;
  update members set balance = balance + p_amt where family_id = f and name = d.cred;
  update debts set paid = paid + p_amt where id = p_id;
  insert into ops(family_id, t, who, amt, txt)
  values (f, 'debtpay', case when p_src = 'الصندوق' then d.debtor else p_src end, p_amt, 'تسديد دين: ' || d.cred);
end $$;

revoke execute on all functions in schema public from anon;
grant execute on all functions in schema public to authenticated;
