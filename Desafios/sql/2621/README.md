# 2621 - Quantidades Entre 10 e 20

## [Descrição](https://judge.beecrowd.com/pt/problems/view/2621)

## Solução

Quantidades Entre 10 e 20 [2621 - Quantidades Entre 10 e 20](../2621/README.md).

```sql
select
    products.name as name
from
    products
    join providers
    on products.id_providers = providers.id
where products.amount between 10 and 20
    and providers.name like 'P%';
```
