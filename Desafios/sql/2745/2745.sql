select
   withTax.name as name,
   round(withTax.salary * 0.1,2) as tax
from (
    select name, salary
    from people
    where salary > 3000
) as withTax