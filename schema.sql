drop table if exists members;
create table members (
  id integer primary key autoincrement,
  firstname text not null,
  lastname text not null,
  gender text not null,
  byear date not null
);

drop table if exists member_details;
create table member_details (
  id integer,
  date date not null DEFAULT CURRENT_TIMESTAMP,
  discipline text not null,
  owns_equipment tinyint not null,
  draw_weight int,
  draw_length int,
  equipment_description text,
  distance int,
  joad_day text
);

drop table if exists attendance;
create table attendance (
  date date not null,
  id integer not null,
  is_joad_practice tinyint not null default 1
);

drop table if exists reschedules;
create table reschedules (
  id integer not null,
  from_date date,
  to_date date,
  note text
);


drop table if exists form_notes;
create table form_notes (
  id integer,
  date date not null DEFAULT CURRENT_TIMESTAMP,
  category text not null,
  status text not null,
  note text,
  instructor text not null
);

drop table if exists scores;
create table scores (
  date date not null,
  id integer not null,
  distance integer not null,
  target_size text not null,
  is_tournament tinyint not null,
  number_rounds integer not null,
  arrows_per_round integer not null,
  score text not null,
  total_score int not null,
  note text
);

