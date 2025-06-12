select 
    products.name as name
from 
    products
    join providers 
    on products.id_providers = providers.id
where products.amount between 10 and 20
    and providers.name like 'P%';