# 2609 - Produtos por Categorias

## [Descrição](https://judge.beecrowd.com/pt/problems/view/2609)

## Solução

Produtos por Categorias [2609 - Produtos por Categorias](../2609/README.md).

```sql
select
    c.name as name,
    sum(p.amount) as sum
from
    products p
    join categories c on p.id_categories = c.id
group by
    c.name;
```
