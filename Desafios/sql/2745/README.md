# 2745 - Taxas

## [Descrição](https://judge.beecrowd.com/pt/problems/view/2745)

## Solução

Taxas [2745 - Taxas](../2745/README.md).

```sql
select
   withTax.name as name,
   round(withTax.salary * 0.1,2) as tax
from (
    select name, salary
    from people
    where salary > 3000
) as withTax
```
