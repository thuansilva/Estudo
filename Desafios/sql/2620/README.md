# 2620 - Pedidos no Primeiro Semestre

## [Descrição](https://judge.beecrowd.com/pt/problems/view/2620)

## Solução

Pedidos no Primeiro Semestre [2620 - Pedidos no Primeiro Semestre](../2620/README.md).

```sql
select
    c.name,
    o.id
from
    customers c
    join orders o on c.id = o.id_customers
where
    o.orders_date between '2016-01-01' and '2016-06-30';
```
