# 2616 - Nenhuma Locação

## [Descrição](https://judge.beecrowd.com/pt/problems/view/2616)

## Solução

Nenhuma Locação [2616 - Nenhuma Locação](../2616/README.md).

```sql
select
    c.id as id,
    c.name as name
from
    customers c
    left join locations l
    on c.id = l.id_customers
where l.id_customers is null
    order by c.id;
```
