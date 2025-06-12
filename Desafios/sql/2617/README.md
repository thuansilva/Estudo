# 2617 - Fornecedor Ajax SA

## [Descrição](https://judge.beecrowd.com/pt/problems/view/2617)

## Solução

Fornecedor Ajax SA [2617 - Fornecedor Ajax SA](../2617/README.md).

```sql
select
    products.name as name,
    providers.name as name
from
    products
    join providers on products.id_providers = providers.id
where providers.name = 'Ajax SA';
```
