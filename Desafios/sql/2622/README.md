# 2622 - Pessoas Jurídicas

## [Descrição](https://judge.beecrowd.com/pt/problems/view/2622)

## Solução

Pessoas Jurídicas [2622 - Pessoas Jurídicas](../2622/README.md).

```sql
select
    customers.name as name
from
    customers
    left join legal_person on legal_person.id_customers = customers.id
where
    legal_person.id_customers is not null;
```
