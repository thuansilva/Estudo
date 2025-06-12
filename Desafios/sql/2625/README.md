# 2625 - Máscara de CPF

## [Descrição](https://judge.beecrowd.com/pt/problems/view/2625)

## Solução

Máscara de CPF [2625 - Máscara de CPF](../2625/README.md).

```sql

select
concat(
substring(n.cpf,1,3), '.',
substring(n.cpf,4,3), '.',
substring(n.cpf,7,3), '-',
substring(n.cpf,10,2)
) as CPF
from
natural_person n
```
