# 2739 - Dia de Pagamento

## [Descrição](https://judge.beecrowd.com/pt/problems/view/2739)

## Solução

Dia de Pagamento [2739 - Dia de Pagamento](../2739/README.md).

```sql
SELECT
    name,
    EXTRACT(DAY FROM payday)::integer AS day
FROM
    loan;
```
