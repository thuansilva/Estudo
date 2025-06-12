select
l.name,
l.customers_number
from lawyers l
where l.customers_number = (select max(customers_number) from lawyers)

union all

select
l.name,
l.customers_number
from lawyers l
where l.customers_number = (select min(customers_number) from lawyers)

union all

select
'Average' as name,
avg(l.customers_number)::integer as customers_number
from lawyers l