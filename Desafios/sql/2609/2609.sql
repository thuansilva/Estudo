select
    c.name as name,
    sum(p.amount) as sum
from
    products p
    join categories c on p.id_categories = c.id
group by
    c.name;