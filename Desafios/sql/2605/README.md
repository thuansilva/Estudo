# 2605 - Representantes Executivos

## [Descrição](https://judge.beecrowd.com/pt/problems/view/2605)

## Solução

Representantes Executivos [2605 - Representantes Executivos](../2605/README.md).

```sql
select p.name, prd.name
from products p
join providers prd on p.id_providers = prd.id
join categories ctd on p.id_categories = ctd.id
where ctd.id = 6
```
