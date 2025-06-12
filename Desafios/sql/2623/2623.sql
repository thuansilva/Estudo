select 
    p.name as name,
    c.name as name
from 
    products p 
    join categories c on c.id=p.id_categories
where 
    p.amount > 100 
   and c.id in (1, 2, 3, 6, 9)
order by 
    c.id;