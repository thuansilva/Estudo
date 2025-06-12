# 2613 - Filmes em Promoção

## [Descrição](https://judge.beecrowd.com/pt/problems/view/2613)

## Solução

Filmes em Promoção [2613 - Filmes em Promoção](../2613/README.md).

```sql
select
    m.id,
    m.name
from movies m
    join prices p on m.id_prices=p.id
where value < 2.00;
```
