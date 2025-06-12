# 2618 - Produtos Importados

## [Descrição](https://judge.beecrowd.com/pt/problems/view/2618)

## Solução

Produtos Importados [2618 - Produtos Importados](../2618/README.md).

```sql
select
    products.name as name,
    providers.name as name,
    categories.name as name
from
    products
    join providers on products.id_providers = providers.id
    join categories on products.id_categories = categories.id
where
    providers.name = 'Sansul SA'
    and categories.name = 'Imported';
```
