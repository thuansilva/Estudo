select 
    c.id as id,
    c.name as name
from 
    customers c
    left join locations l
    on c.id = l.id_customers
where l.id_customers is null
    order by c.id;