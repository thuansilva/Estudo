select p.name, prd.name
from products p
join providers prd on p.id_providers = prd.id
join categories ctd on p.id_categories = ctd.id
where ctd.id = 6