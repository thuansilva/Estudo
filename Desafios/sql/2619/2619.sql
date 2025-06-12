select
    products.name as name,
    providers.name as name,
    products.price as price
from
    products
    join providers on products.id_providers = providers.id
    join categories on products.id_categories = categories.id
where
    products.price > 1000 
    and categories.name = 'Super Luxury';