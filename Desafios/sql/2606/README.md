# 2606 - Categorias

## [Descrição](https://judge.beecrowd.com/pt/problems/view/2606)

## Solução

Categorias [2606 - Categorias](../2606/README.md).

```sql
select
    p.id,
    p.name
from
    products p
    join categories c on p.id_categories = c.id
where
    c.name like 'super%';
```
