/* select now();
\echo "===≠===============/============"

 \l

do $$
  <<outerb>>
  declare
    num integer := 56;
    name text := 'abdul hafeez';
    age integer :=56;
  begin
    name := 'muhammad';
    age :=56;
    declare
      name text := 'default';
    begin
      name := 'ummu abdillah';
      raise notice 'inner block wassatiyya among the muslim: %', outerb.name;
    end;
    raise notice 'hi there % %', num,name;
    raise notice 'next big thing %', age;
  end outerb
$$; */

DO $$ 
DECLARE
   created_at time := NOW();
  nextT created_at%type;
  ABU CONSTANT VARCHAR := 'LAS';
BEGIN 
   RAISE NOTICE '%:%', created_at, ABU;
   PERFORM pg_sleep(03);
  nextT := '23:56:30';
 --  nt alias for  nextT ;
  raise notice '%: ',nextT;
   RAISE NOTICE '%', created_at;
END $$;

DO $$ 
BEGIN 
  RAISE INFO 'information message %', now() ;
  RAISE LOG 'log message %', now();
  RAISE DEBUG 'debug message %', now();
  RAISE WARNING 'warning message %', now();
  RAISE NOTICE 'notice message %', now();
END $$;
