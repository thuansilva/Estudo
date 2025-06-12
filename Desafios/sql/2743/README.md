# 2743 - Quantidade de Caracteres

## [Descrição](https://judge.beecrowd.com/pt/problems/view/2743)

## Solução

Quantidade de Caracteres [2743 - Quantidade de Caracteres](../2743/README.md).

```sql
select
    name,
    length(name) as length
from
    people
order by
    length desc
```
